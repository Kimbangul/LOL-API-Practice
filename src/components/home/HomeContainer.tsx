'use client'

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import moment from "moment";
import { useRecoilState } from "recoil";
import { globalPuuId } from "@/recoil/info";

import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";
import Home from "@/components/home/HomeStyle";


const HomeContainer = () => {
  // PARAM state
  const [inputName, setInputName] = useState('');
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
  
  /** 경기 ID */
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

  /** 시작 시각, 플레이어 */
  const matchDetailInfo = useQuery(['matchDetail', matchInfo.data],
    async () => {
      const dataList = await matchInfo.data.data?.map(async (el: string) => {
        const res = await client.get(`api/match/detail`, {params: {matchId: el}});

        const nameList = await res.data?.data.metadata?.participants.map(async (el : string) => {
          const res = await client.get(`/api/account`, {params: {puuid: el}});
          const name = await res.data.data?.gameName;
          console.log(name);
          return name;
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
  }

  // FUNCTION 검색 결과 조회
  const getResultView = useMemo(()=>{
    switch(summonerInfo.data?.status){
      case 200:
        return (
          <ResultView 
            data={summonerInfo.data.data}
            matchInfo={matchDetailInfo.data} 
            isMatchLoading={matchDetailInfo.status}
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
    <Home.Wrapper>
       <Home.Container>
        <InputView inputName={inputName} setInputName={setInputName} getSummonerInfo={getSummonerInfo}/>
          {
            summonerInfo.isFetching 
            ?
            <>Loading</>
            :
            getResultView
          }
      </Home.Container>
    </Home.Wrapper>
  )
}

export default HomeContainer;