'use client'

import client from "@/app/axios/client";
import HomeView from "@/components/home/HomeView";

const HomeContainer = () => {

  const summonerName ='헤비메탈 아이돌';
  
  // const summonerInfo = client.get(`/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=
  // `);
  const dummy = client.get(`/api/account`);
  console.log(dummy);

  return(
    <HomeView />
  )
}

export default HomeContainer;