'use client'

import { useState, useEffect, useMemo, useCallback } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { globalPuuId } from "@/recoil/info";

import { ResponseType } from '@/app/api/account/type';
import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";

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
      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!summonerInfo.data?.data.puuid,
    }
  );

  const matchDetailInfo = useQuery(['matchDetail', selectedMatchId],
    async ()=> {
      const res = await client.get(`api/match/detail`, {params: {matchId: selectedMatchId}});
      let nameList : string[] = [];

      if (!( res.data?.data.metadata?.participants)) return nameList;

      res.data?.data.metadata?.participants.forEach(async (el : string) => {
        const res = await client.get(`/api/account`, {params: {puuid: el}});
        console.log(el);
        const name = res.data.data?.gameName;
        // console.log(name);

        nameList.push(name);  
        console.log(nameList);
      });

      return nameList;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!selectedMatchId,
    }
  );

  // FUNCTION onclick events
  const getSummonerInfo = () => {
    summonerInfo.refetch();
    setSelectedMatchId(null);
  }

  const getResultView = useMemo(()=>{
    switch(summonerInfo.data?.status){
      case 200:
        return <ResultView data={summonerInfo.data.data} matchInfo={matchInfo.data?.data} setSelectedMatchId={setSelectedMatchId}/>
      case 404:
        return (
          <p>소환사 정보가 없습니다.</p>
        )
      default:
        return '검색할 값을 입력해주세요!';
    }
  }, [summonerInfo.data, matchInfo.data]);

  useEffect(()=>{
    console.log(matchDetailInfo.data);
  }, [matchDetailInfo.data]);

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
    {
      selectedMatchId &&
      <>
     <h4>같이 게임한 사람들</h4>
      <ul>
      {matchDetailInfo.data?.map((el : string, idx: number)=>{
        return <li key={el + idx}>{el}</li>
      })}
      </ul>
      </>
    }
   </>
  )
}

export default HomeContainer;