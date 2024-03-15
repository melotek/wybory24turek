import { rateLimit } from '@/actions/utills';
import dbConnect from '@/libs/dbConnect';
import { questionCountyCouncil } from '@/models/questionForm';
import { IquestionForms } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}
type RequestBody = {
  body: IquestionForms
} & NextApiRequest

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: RequestBody,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    await dbConnect();
    console.log(req.body)
    // Process a POST request
    if (req.body.recipient === "COUNTY_COUNCIL") {
      await limiter.check(res, 10, "CACHE_TOKEN"); 
      await questionCountyCouncil.create<IquestionForms>(req.body);
      res.status(200).json({ message: 'Twoje pytanie zostało dodane do puli zapytań' })
    } else {
      res.status(400).json({ message: 'Pytanie nie jest skierowane do kandydatów do rady powiatu' });
    }
  } else {
    res.status(405).json({ message: 'Błędna metoda zapytania' })
    // Handle any other HTTP method
  }
}
