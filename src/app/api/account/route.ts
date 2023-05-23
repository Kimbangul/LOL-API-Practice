import {apiClient} from "@/app/axios/client";
import URL from "@/app/api/url.json";
import { NextResponse } from "next/server";

export async function GET(req: Request){
  console.log(req);
  
  const name='헤비메탈 아이돌';
  const API_URL = `${URL["SUMMONER-V4"]}/${name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const data = await apiClient.get(API_URL);

  return NextResponse.json(data.data);
}