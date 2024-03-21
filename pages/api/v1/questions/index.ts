import { rateLimit } from "@/actions/utills";
import dbConnect from "@/libs/dbConnect";
import {
  questionCityCouncil,
  questionCountyCouncil,
  questionMayor,
} from "@/models/questionForm";
import { IquestionForms, Recipient } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  message?: string;
  questionsMayor?: IquestionForms<Recipient>[];
  questionsCityCouncil?: IquestionForms<Recipient>[];
  questionsCountyCouncil?: IquestionForms<Recipient>[];
}

interface RequestBody extends NextApiRequest {
  body: IquestionForms<Recipient>;
}

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: RequestBody,
  res: NextApiResponse<ResponseData>,
) {
  await limiter.check(res, 10, "CACHE_TOKEN");

  await dbConnect();

  if (req.method === "GET") {
    try {
      const [questionsMayor, questionsCityCouncil, questionsCountyCouncil] =
        await Promise.all([
          questionMayor.find({}),
          questionCityCouncil.find({}),
          questionCountyCouncil.find({}),
        ]);
      return res.status(200).json({
        questionsMayor: questionsMayor,
        questionsCityCouncil: questionsCityCouncil,
        questionsCountyCouncil: questionsCountyCouncil,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Błąd serwera, prosimy spróbować później" });
    }
  }
}
