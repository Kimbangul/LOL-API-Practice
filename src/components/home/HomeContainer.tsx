'use client'

import { useState, useEffect, useMemo, useCallback } from "react";
import client from "@/app/axios/client";
import HomeView from "@/components/home/HomeView";
import { AxiosResponse } from "axios";

const HomeContainer = () => {


  // PARAM state
  const [inputName, setInputName] = useState('');
  const [data, setData] = useState<null|AxiosResponse<any,any>>(null);


  // FUNCTION search info
  const getSummonerInfo = useCallback(async () => {
    const summonerInfo = await client.get(`/api/account`, {params: {name: inputName}});
    console.log(summonerInfo);
    setData(summonerInfo);
  }, [inputName]);

  return(
    <HomeView inputName={inputName} setInputName={setInputName} getSummonerInfo={getSummonerInfo}/>
  )
}

export default HomeContainer;