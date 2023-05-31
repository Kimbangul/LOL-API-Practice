import { ResultViewPropsType, DetailResultType } from "@/components/home/HomeType";
import { useEffect } from "react";

const ResultView : React.FC<Partial<ResultViewPropsType>> = ({data, matchInfo, setSelectedMatchId}) => {
  useEffect(()=>{
    console.log(matchInfo);
  }, [matchInfo])

  useEffect(()=>{
    console.log(matchInfo?.isFetching);
  }, [matchInfo?.isFetching])


  return(
    <>
    <ul>
      <li> 계정 ID : {data?.accountId}</li>
      <li> 암호화 ID : {data?.id}</li>
      <li> 이름 : {data?.name}</li>
      <li> puuid : {data?.puuid}</li>
      <li> 레벨 : {data?.summonerLevel}</li>
    </ul>
    <br />
    <h3>최근 기록({matchInfo?.data?.length}개)</h3>
    {
      matchInfo &&
      <ul>
        {
          matchInfo?.data?.map((el: DetailResultType, idx: number) => {
            return(
              <li key={el.time + idx}>{el.time}</li>
            )
          })
        }
      </ul>
    }
    </>
  )
}

export default ResultView;