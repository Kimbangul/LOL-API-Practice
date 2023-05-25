import { ResultViewPropsType } from "@/components/home/HomeType";

const ResultView : React.FC<Partial<ResultViewPropsType>> = ({data, matchInfo, setSelectedMatchId}) => {
  console.log(matchInfo);
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
    <h3>최근 기록(20개)</h3>
    {
      matchInfo &&
      <ul>
        {
          matchInfo.map((el) => {
            return(
              
              <li key={el} onClick={setSelectedMatchId ? () => setSelectedMatchId(el) : ()=>{return;}}>{el}</li>
            )
          })
        }
      </ul>
    }
    </>
  )
}

export default ResultView;