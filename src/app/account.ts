// import client from "@/app/axios/client";
// import { NextResponse } from "next/server";

import type { NextApiRequest, NextApiResponse } from "next";

// export async function GET(request: Request){
//   const dummy = {'sample': 'sample'};

//   const res = JSON.stringify(dummy);

//   return NextResponse.json({res});
// }

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse)  {
  
      res.status(200).json({ pokemon: {
          name: '꼬부기'
      } })
}