'use client'

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { globalPuuId } from "@/recoil/info";

import client from "@/app/axios/client";
import InputView from "@/components/home/InputView";
import ResultView from "@/components/home/ResultView";
import moment from "moment";

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
      console.log(res);
      return res.data || [];
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!summonerInfo.data?.data.puuid,
    }
  );

  const matchDetailInfo = useQuery(['matchDetail', matchInfo.data],
    async ()=> {
      const dataList = await matchInfo.data.data?.map(async (el: string) => {
        const res = await client.get(`api/match/detail`, {params: {matchId: el}});

        console.log(res);

        const nameList = await res.data?.data.metadata?.participants.map(async (el : string) => {
          const res = await client.get(`/api/account`, {params: {puuid: el}});
          console.log(res);
          const name = await res.data.data?.gameName;
          
          const result = await name;
  
          return result;
        });

        const data = {
            nameList : await nameList || [],
            time: moment(await res.data?.data.info?.gameStartTimestamp).format('YYYY.MM.DD HH:mm:ss')
          };
        
          console.log(data);
        return data;
      });

      // console.log(dataList);

      return await dataList;
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
        return <ResultView data={summonerInfo.data.data} matchInfo={matchDetailInfo.data} setSelectedMatchId={setSelectedMatchId}/>
      case 404:
        return (
          <p>소환사 정보가 없습니다.</p>
        )
      default:
        return '검색할 값을 입력해주세요!';
    }
  }, [summonerInfo.data, matchDetailInfo.data]);

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
    {/* {
      matchDetailInfo.data &&
      <>
     <h4>같이 게임한 사람들</h4>
      <ul>
      {matchDetailInfo.data?.nameList?.map((el : string, idx: number)=>{
        return <li key={el + idx}>{el}</li>
      })}
      </ul>
      </>
    } */}
   </>
  )
}

export default HomeContainer;