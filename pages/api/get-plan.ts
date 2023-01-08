import type { NextApiRequest, NextApiResponse } from 'next'
import { SummaryType } from '../../types'

type Data = {
  plans: SummaryType[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {



    res.status(200).json({ plans: [
        
    ] });
}
