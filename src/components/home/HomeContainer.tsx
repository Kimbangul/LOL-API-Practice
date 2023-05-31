'use client'

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { globalPuuId } from "@/recoil/info";

import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";
import moment from "moment";
import { DetailResultType } from "./HomeType";

const HomeContainer = () => {
  // PARAM state
  const [inputName, setInputName] = useState('');
  const [selectedMatchId, setSelectedMatchId] = useState<null|string>(null);
  const [puuId, setPuuId] = useRecoilState<string>(globalPuuId);

  // FUNCTION data fetch
  const summonerInfo = useQuery('summonerInfo',
      async () => {
        const res = await client.get(`/api/account`, {params: {name: inputName}});
        
        return res.data;
      },
      {
        enabled: false,
        onSuccess: (data)=>{
          setPuuId(data.data?.puuid);
        }
      }
    );
  
  const matchInfo = useQuery(['matchInfo', summonerInfo.data],
    async () => {
      const res = await client.get(`/api/match`, {params: {puuid: summonerInfo.data?.data?.puuid}});
      return res.data || [];
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!summonerInfo.data?.data.puuid,
    }
  );

  const matchDetailInfo = useQuery(['matchDetail', matchInfo.data],
    async () => {
      const dataList = await matchInfo.data.data?.map(async (el: string) => {
        const res = await client.get(`api/match/detail`, {params: {matchId: el}});

        const nameList = await res.data?.data.metadata?.participants.map(async (el : string) => {
          const res = await client.get(`/api/account`, {params: {puuid: el}});
          const name = await res.data.data?.gameName;
          
          const result = await name;
  
          return result;
        });

        const data = {
            nameList : await Promise.allSettled(nameList),
            time: moment(await res.data?.data.info?.gameStartTimestamp).format('YYYY.MM.DD HH:mm:ss')
          };
        
        return data;
      });

      return await Promise.all(dataList);
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!matchInfo.data,
    }
  );

  useEffect(()=>{
    console.log(matchDetailInfo.data);
  }, [matchDetailInfo.data]);


  // FUNCTION onclick events
  const getSummonerInfo = () => {
    summonerInfo.refetch();
    setSelectedMatchId(null);
  }

  const getResultView = useMemo(()=>{
    switch(summonerInfo.data?.status){
      case 200:
        return (
          <ResultView 
            data={summonerInfo.data.data}
            matchInfo={matchDetailInfo.data} 
            isMatchLoading={matchDetailInfo.status}
            setSelectedMatchId={setSelectedMatchId}
          />
        )
      case 404:
        return (
          <p>소환사 정보가 없습니다.</p>
        )
      default:
        return '검색할 값을 입력해주세요!';
    }
  }, [summonerInfo.data, matchDetailInfo]);

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