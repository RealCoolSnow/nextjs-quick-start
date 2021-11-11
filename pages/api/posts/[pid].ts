import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query
  res.status(200).json({ post_id: pid })
}

export default handler
