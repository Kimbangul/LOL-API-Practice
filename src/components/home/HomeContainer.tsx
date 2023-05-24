'use client'

import { useState, useEffect, useMemo, useCallback } from "react";
import { AxiosResponse } from "axios";
import {ResponseType} from '@/app/api/account/type';
import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";

const HomeContainer = () => {


  // PARAM state
  const [inputName, setInputName] = useState('');
  const [data, setData] = useState<ResponseType | null>(null);


  // FUNCTION search info
  const getSummonerInfo = useCallback(async () => {
    const summonerInfo = await client.get(`/api/account`, {params: {name: inputName}});
    console.log(summonerInfo);
    setData(summonerInfo.data);
  }, [inputName]);
  

  return(
   <>
    <InputView inputName={inputName} setInputName={setInputName} getSummonerInfo={getSummonerInfo}/>
    <ResultView data={data?.data || undefined}/>
   </>
  )
}

export default HomeContainer;