'use client'

import { useState, useEffect, useMemo, useCallback } from "react";
import { useQuery } from "react-query";

import {ResponseType} from '@/app/api/account/type';
import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";

const HomeContainer = () => {


  // PARAM state
  const [inputName, setInputName] = useState('');

  // FUNCTION data fetch
  const summonerInfo = useQuery('summonerInfo',
      async () => {
        const res = await client.get(`/api/account`, {params: {name: inputName}});
        return res.data;
      },
      {
        enabled: false,
      }
    );

  
  const matchInfo = useQuery('matchInfo',
    async () => {
      console.log(summonerInfo.data?.data.puuid);
      const res = await client.get(`/api/match`, {params: {puuid: summonerInfo.data.puuid}});
      return res.data;
    },
    {
      enabled: !!(summonerInfo.data?.data.puuid ? summonerInfo.data?.data.puuid : false),
    }
);


  // FUNCTION onclick events
  const getSummonerInfo = () => {
    summonerInfo.refetch();
  }

  const getResultView = useMemo(()=>{
    console.log('view 변경')
    switch(summonerInfo.data?.status){
      case 200:
        return <ResultView data={summonerInfo.data.data}/>
      case 404:
        return (
          <p>소환사 정보가 없습니다.</p>
        )
      default:
        return '검색할 값을 입력해주세요!';
    }
  }, [summonerInfo.data]);


  useEffect(()=>{
    console.log('react-query data');
    console.log(summonerInfo.data);
  }, [summonerInfo.data]);

  useEffect(()=>{
    console.log('match  data');
    console.log(matchInfo.data);
  }, [matchInfo.data]);

  return(
   <>
    <InputView inputName={inputName} setInputName={setInputName} getSummonerInfo={getSummonerInfo}/>
    {
      summonerInfo.isFetching 
      ?
      <>Loading</>
      :
      getResultView
    }
   </>
  )
}

export default HomeContainer;