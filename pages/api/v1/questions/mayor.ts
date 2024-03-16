import { rateLimit } from '@/actions/utills';
import dbConnect from '@/libs/dbConnect';
import { questionMayor } from '@/models/questionForm';
import { IquestionForms } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
    message?: string;
    questions?: IquestionForms[];
}

interface RequestBody extends NextApiRequest {
    body: IquestionForms;
}

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500 // Max 500 users per second
});

export default async function handler(
    req: RequestBody,
    res: NextApiResponse<ResponseData>
) {
    await limiter.check(res, 10, 'CACHE_TOKEN');

    await dbConnect();

    if (req.method === 'POST') {
        if (req.body.recipient !== 'MAYOR') {
            return res
                .status(400)
                .json({
                    message:
                        'Pytanie nie jest skierowane do kandydatów na burmistrza'
                });
        }
        try {
            await questionMayor.create(req.body);
            return res
                .status(200)
                .json({
                    message: 'Twoje pytanie zostało dodane do puli zapytań'
                });
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Błąd serwera, prosimy spróbować później' });
        }
    } else if (req.method === 'GET') {
        try {
            const questions = await questionMayor.find({});
            return res.status(200).json({ questions });
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Błąd serwera, prosimy spróbować później' });
        }
    }
}
