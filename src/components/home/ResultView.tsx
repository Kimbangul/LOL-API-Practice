import { ResultViewPropsType, DetailResultType, nameListType } from "@/components/home/HomeType";
import LoadingView from "@/components/common/loading/LoadingView";
import { Info, Record } from "@/components/home/ResultStyle";

const ResultView : React.FC<Partial<ResultViewPropsType>> = ({data, matchInfo, isMatchLoading}) => {

  return(
    <>
    <Info.List>
      <Info.Item> 계정 ID : {data?.accountId}</Info.Item>
      {/* <Info.Item> 암호화 ID : {data?.id}</Info.Item> */}
      <Info.Item> 이름 : {data?.name}</Info.Item>
      {/* <Info.Item> puuid : {data?.puuid}</Info.Item> */}
      <Info.Item> 레벨 : {data?.summonerLevel}</Info.Item>
    </Info.List>
    <Record.Container>
    {
      isMatchLoading === 'loading' || isMatchLoading === 'idle'
      ?
      <LoadingView />
      :
      <>
      <Record.Title>최근 기록({matchInfo?.length}개)</Record.Title>
      {
        matchInfo &&
      <Record.List>
        {
          matchInfo.map((el: DetailResultType, idx: number) => {
            return(
              <Record.Item key={el.time + idx}>
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
              </Record.Item>
            )
          })
        }
      </Record.List>
      }
      </>
    }
    </Record.Container>
    </>
  )
}

export default ResultView;