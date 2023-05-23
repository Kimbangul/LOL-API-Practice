import { HomeViewPropsType } from "@/components/home/HomeType";

const HomeView : React.FC<HomeViewPropsType> = ({inputName, setInputName, getSummonerInfo}) => {
  return(
    <div>
     <input type='text' placeholder="닉네임을 입력해주세요." value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
     <button onClick={getSummonerInfo}>확인</button>
    </div>
  )
}

export default HomeView;