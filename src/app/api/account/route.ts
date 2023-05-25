import {krApiClient, asiaApiClient} from "@/app/axios/client";
import APIURL from "@/app/api/url.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response){
  let API_URL;
  let data;
  const reqUrl = new URL(req.url);
  const name = reqUrl.searchParams.get('name');
  const puuid = reqUrl.searchParams.get('puuid');

  if (puuid){
    API_URL = `${APIURL["ACCOUNT-V1"]}/${puuid}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    data = await asiaApiClient.get(API_URL);
  }
  else{
    API_URL = `${APIURL["SUMMONER-V4-NAME"]}/${name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    data = await krApiClient.get(API_URL);
  }

  return NextResponse.json({
    data: data.data,
    status: data.status
  });
}