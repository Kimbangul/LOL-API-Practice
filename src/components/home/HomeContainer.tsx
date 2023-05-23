'use client'

import client from "@/axios/client";
import HomeView from "@/components/home/HomeView";

const HomeContainer = () => {

  const summonerName ='헤비메탈 아이돌';
  
  const summonerInfo = client.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);


  
  console.log(summonerInfo);

  return(
    <HomeView />
  )
}

export default HomeContainer;