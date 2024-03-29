import { rateLimit } from "@/actions/utills";
import dbConnect from "@/libs/dbConnect";
import { questionCountyCouncil } from "@/models/questionForm";
import { IquestionForms } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};
type RequestBody = {
  body: IquestionForms<"COUNTY_COUNCIL">;
} & NextApiRequest;

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: RequestBody,
  res: NextApiResponse<ResponseData>,
) {
  await limiter.check(res, 10, "CACHE_TOKEN");
  if (req.method === "POST") {
    await dbConnect();
    if (req.body.recipient === "COUNTY_COUNCIL") {
      try {
        await questionCountyCouncil.create<IquestionForms<"COUNTY_COUNCIL">>(
          req.body,
        );
        res
          .status(200)
          .json({ message: "Twoje pytanie zostało dodane do puli zapytań" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Błąd serwera, prosimy spróbować później" });
      }
    } else {
      res.status(400).json({
        message: "Pytanie nie jest skierowane do kandydatów do rady powiatu",
      });
    }
  } else {
    res.status(405).json({ message: "Błędna metoda zapytania" });
    // Handle any other HTTP method
  }
}
