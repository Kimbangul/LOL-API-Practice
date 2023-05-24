import {apiClient} from "@/app/axios/client";
import APIURL from "@/app/api/url.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response){
  const reqUrl = new URL(req.url);
  const name = reqUrl.searchParams.get('name');

  const API_URL = `${APIURL["SUMMONER-V4"]}/${name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const data = await apiClient.get(API_URL);

  return NextResponse.json({
    data: data.data,
    status: data.status
  });
}