import { NextApiRequest, NextApiResponse } from 'next'
import {RouteData} from "repository/routeRep";

//@Autowried
const repository = RouteData;

//@RestController
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(repository)) {
            throw new Error('Cannot find data')
        }
        res.status(200).json(repository)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
