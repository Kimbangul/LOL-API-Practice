import { InputViewPropsType } from "@/components/home/HomeType";

const InputView : React.FC<InputViewPropsType> = ({inputName, setInputName, getSummonerInfo}) => {
  return(
    <div>
      <form onSubmit={(e) => {e.preventDefault(); getSummonerInfo()}}>
        <input type='text' placeholder="닉네임을 입력해주세요." value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
        <button onClick={getSummonerInfo}>확인</button>
      </form>
    </div>
  )
}

export default InputView;