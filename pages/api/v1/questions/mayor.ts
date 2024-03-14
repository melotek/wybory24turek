import client from '@/actions/client';
import { rateLimit } from '@/actions/utills';
import dbConnect from '@/libs/dbConnect';
import { questionMayor } from '@/models/questionForm';
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
    if (req.method === 'POST') {
        // Process a POST request
        if (req.body.recipient === "MAYOR") {
        await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
        const collectionName = await questionMayor.collection.name
        console.log(collectionName)
        // await questionMayor.create(req.body);
        res.status(200).json({ message: 'Hello from Next.js!' })
        } else {
          res.status(400).json({ message: 'Pytanie nie jest skierowane do kandydatów na burmistrza' });}
      } else {
        res.status(405).json({ message: 'Błędna metoda zapytania' })

        // Handle any other HTTP method
      }
}