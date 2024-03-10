import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body)
        res.status(200).json({ message: 'Hello from Next.js!' })

      } else {
        res.status(200).json({ message: '?' })

        // Handle any other HTTP method
      }
}