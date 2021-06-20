// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// on dev mode ~ prev mode on production, preview mode will be call every time when page reload 
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
// set some cookies
  res.setPreviewData({})

  
  res.statusCode = 200;
  res.status(200).json({ name: 'John Doe' })
}
