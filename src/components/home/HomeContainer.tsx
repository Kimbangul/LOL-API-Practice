'use client'

import { useState, useEffect, useMemo, useCallback } from "react";
import { AxiosResponse } from "axios";
import { useQuery, useQueries } from "react-query";

import {ResponseType} from '@/app/api/account/type';
import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";

const HomeContainer = () => {


  // PARAM state
  const [inputName, setInputName] = useState('');

  // FUNCTION data fetch
  // const { isFetching, data, error, refetch } = useQuery(
  //   'summonerInfo',
  //   async () => {
  //     const res = await client.get(`/api/account`, {params: {name: inputName}});
  //     console.log(res);
  //     return res.data;
  //   },
  //   {
  //     enabled: false,
  //   }
  // );
  const result = useQueries([
    {
      queryKey: 'summonerInfo', 
      queryFn: async () => {
          const res = await client.get(`/api/account`, {params: {name: inputName}});
          console.log(res);
          return res.data;
        },
      refetchOnMount: false,
      enabled: false,
    },
    {
      queryKey: 'matchInfo',
      queryFn: async() => {
          const res = await client.get(`/api/account`, {params: {name: inputName}});
          console.log(res);
          return res.data;
      },
      refetchOnMount: false,
      enabled: false,
    }
  ]);


  // FUNCTION onclick events
  const getSummonerInfo = () => {
    // refetch();
    result[0].refetch();
  }

  const getResultView = useMemo(()=>{
    switch(result[0].data?.status){
      case 200:
        return <ResultView data={result[0].data.data}/>
      case 404:
        return (
          <p>소환사 정보가 없습니다.</p>
        )
      default:
        return null;
    }
  }, [result[0].data]);


  useEffect(()=>{
    console.log(result[0].data)
  }, [result[0].data]);

  return(
   <>
    <InputView inputName={inputName} setInputName={setInputName} getSummonerInfo={getSummonerInfo}/>
    {
      result[0].isFetching 
      ?
      <>Loading</>
      :
      getResultView
    }
   </>
  )
}

export default HomeContainer;