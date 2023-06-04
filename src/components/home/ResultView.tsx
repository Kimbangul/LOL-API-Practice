import { ResultViewPropsType, DetailResultType, nameListType } from "@/components/home/HomeType";
import LoadingView from "@/components/common/loading/LoadingView";

const ResultView : React.FC<Partial<ResultViewPropsType>> = ({data, matchInfo, isMatchLoading}) => {

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
    {
      isMatchLoading === 'loading' || isMatchLoading === 'idle'
      ?
      <LoadingView />
      :
      <>
      <h3>최근 기록({matchInfo?.length}개)</h3>
      {
        matchInfo &&
      <ul>
        {
          matchInfo.map((el: DetailResultType, idx: number) => {
            return(
              <li key={el.time + idx}>
                <h4>{el.time}</h4>
                <br />
                <h5>플레이어 목록</h5>
                <ul>
                  {
                    el.nameList.map((name: nameListType, idx:number) => {
                      return <li key={name.value + idx}>{name.value}</li>
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
      }
      </>
    }
    </>
  )
}

export default ResultView;