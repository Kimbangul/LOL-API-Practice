import { Dispatch, SetStateAction } from "react";

export interface HomeViewPropsType {
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>
  getSummonerInfo: () => Promise<void>
}