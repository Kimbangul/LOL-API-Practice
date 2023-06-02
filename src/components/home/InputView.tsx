import { InputViewPropsType } from "@/components/home/HomeType";
import Input from "@/components/home/InputStyle";

const InputView : React.FC<InputViewPropsType> = ({inputName, setInputName, getSummonerInfo}) => {
  return(
      <Input.Container onSubmit={(e) => {e.preventDefault(); getSummonerInfo()}}>
        <Input.Input type='text' placeholder="닉네임을 입력해주세요." value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
        <Input.Button onClick={getSummonerInfo}>확인</Input.Button>
      </Input.Container>
  )
}

export default InputView;