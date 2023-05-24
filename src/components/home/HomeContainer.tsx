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
  

  const getResultView = useMemo(()=>{
    switch(data?.status){
      case 200:
        return <ResultView data={data?.data}/>
      case 404:
        return (
          <p>소환사 정보가 없습니다.</p>
        )
      default:
        return null;
    }
  }, [data]);

  return(
   <>
    <InputView inputName={inputName} setInputName={setInputName} getSummonerInfo={getSummonerInfo}/>
    {getResultView}
   </>
  )
}

export default HomeContainer;