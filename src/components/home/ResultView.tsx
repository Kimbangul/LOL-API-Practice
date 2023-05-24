import { ResultViewPropsType } from "@/components/home/HomeType";

const ResultView : React.FC<Partial<ResultViewPropsType>> = ({data}) => {
  
  console.log(data);
  
  return(
    <ul>
      <li> 계정 ID : {data?.accountId}</li>
      <li> 암호화 ID : {data?.id}</li>
      <li> 이름 : {data?.name}</li>
      <li> puuid : {data?.puuid}</li>
      <li> 레벨 : {data?.summonerLevel}</li>
    </ul>
  )
}

export default ResultView;