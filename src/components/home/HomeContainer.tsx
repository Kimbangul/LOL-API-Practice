'use client'

import { useState, useEffect, useMemo, useCallback } from "react";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import {ResponseType} from '@/app/api/account/type';
import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";

const HomeContainer = () => {


  // PARAM state
  const [inputName, setInputName] = useState('');

  // FUNCTION data fetch
  const { isLoading, data, error, refetch } = useQuery(
    'summonerInfo',
    async () => {
      const res = await client.get(`/api/account`, {params: {name: inputName}});
      console.log(res);
      return res.data;
    },
    {
      enabled: false,
    }
  );

  // FUNCTION onclick events
  const getSummonerInfo = () => {
    refetch();
  }

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