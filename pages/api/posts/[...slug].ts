// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("inside posts catch all api");
  res.status(200).json({ name: "John Doe", path: req.query });
};
