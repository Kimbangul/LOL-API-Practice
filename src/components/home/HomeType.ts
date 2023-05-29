import { Dispatch, SetStateAction } from "react";
import {ResponseType} from '@/app/api/account/type';

export interface InputViewPropsType {
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  getSummonerInfo: () => void
}

export interface DetailResultType {
    nameList: string[];
    time: string;
  }
  export interface ResultViewPropsType extends ResponseType {
  matchInfo: DetailResultType[];
  setSelectedMatchId: Dispatch<SetStateAction<string|null>>
}

