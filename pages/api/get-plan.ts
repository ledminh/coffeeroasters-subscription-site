import type { NextApiRequest, NextApiResponse } from 'next'
import { SummaryType } from '../../types'


import { getPlans } from '../../utils/mongodb/functions';

type Data = {
  plans: SummaryType[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { userId } = req.query;

    if(!userId) {
        res.status(400).json({ plans: [] });
        return;
    }

    getPlans(userId as string)
        .then(plans => {
            res.status(200).json({ plans: plans });
        })
        .catch(err => {
            res.status(400).json({ plans: [] });
        });
}
