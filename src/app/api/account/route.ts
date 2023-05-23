import client from "@/app/axios/client";
import { NextResponse } from "next/server";


export async function GET(request: Request){
  const dummy = {'sample': 'sample'};

  const res = JSON.stringify(dummy);

  return NextResponse.json({res});
}
