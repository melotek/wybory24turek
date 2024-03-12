import { rateLimit } from '@/actions/utills';
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
        
        await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
        res.status(200).json({ message: 'Hello from Next.js!' })

      } else {
        res.status(200).json({ message: '?' })

        // Handle any other HTTP method
      }
}