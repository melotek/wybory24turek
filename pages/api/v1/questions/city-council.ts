import { rateLimit } from '@/actions/utills';
import dbConnect from '@/libs/dbConnect';
import questionForm, { questionCityCouncil } from '@/models/questionForm';
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();

    if (req.method === 'POST') {
        // Process a POST request
        if (req.body.recipient === "COUNTY") {

        await limiter.check(res, 10, "CACHE_TOKEN"); 
        await questionCityCouncil.create(req.body);
        res.status(200).json({ message: 'Twoje pytanie zostało dodane do puli zapytań' })} else {
          res.status(400).json({ message: 'Pytanie nie jest skierowane do kandydatów do rady miasta' });
        }

      } else {
        res.status(405).json({ message: 'Błędna metoda zapytania' })

        // Handle any other HTTP method
      }
}