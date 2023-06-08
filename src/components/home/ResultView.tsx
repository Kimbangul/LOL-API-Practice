import { ResultViewPropsType, DetailResultType, nameListType } from "@/components/home/HomeType";
import LoadingView from "@/components/common/loading/LoadingView";
import { Info, Record, COLOR_LIST } from "@/components/home/ResultStyle";

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
              <Record.Item key={el.time + idx} colorKey={Math.floor(Math.random() * COLOR_LIST.length)}>
                <Record.Time>{el.time}</Record.Time>
                <Record.SubTitle>플레이어 목록</Record.SubTitle>
                <Record.Player.List>
                  {
                    el.nameList.map((name: nameListType, idx:number) => {
                      return <Record.Player.Item key={name.value + idx}>{name.value}</Record.Player.Item>
                    })
                  }
                </Record.Player.List>
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