---
to: "<%= options.indexOf('api') !== -1 ? `src/pages/api/${name}.ts` : null %>"
---
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ name: "John Doe" });
}
