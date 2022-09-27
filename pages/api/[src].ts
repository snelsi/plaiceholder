import type { NextApiRequest, NextApiResponse } from "next";
import { getPlaiceholder } from "plaiceholder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let src = req?.query?.src;
    if (Array.isArray(src)) [src] = src;

    if (!src) {
      res.status(400).json({ message: "Image src is missing" });
      return;
    }

    console.log(`[src]: ${src}}`);
    console.time("base64");

    // const { base64 } = await getPlaiceholder(src);
    const { base64 } = { base64: "test" };

    console.log(`[base64]: ${base64}`);
    console.timeEnd("base64");

    res.status(200).json(base64);
  } catch (error) {
    console.error(error);
    const message: string = "Unexpected error";
    res.status(500).json({ message, error });
  }
}
