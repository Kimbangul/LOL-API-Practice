import {asiaApiClient} from "@/app/axios/client";
import APIURL from "@/app/api/url.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response){
  const reqUrl = new URL(req.url);
  const puuid = reqUrl.searchParams.get('puuid');

  const API_URL = `${APIURL["MATCH-V5"]}/${puuid}/ids?start=0&count=20&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const data = await asiaApiClient.get(API_URL);

  return NextResponse.json({
    data: data.data,
    status: data.status
  });
}