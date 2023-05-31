import { Dispatch, SetStateAction } from "react";
import {ResponseType} from '@/app/api/account/type';
import { UseQueryResult } from "react-query";

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
  // matchInfo: DetailResultType[];
  matchInfo: UseQueryResult<DetailResultType[]>
  setSelectedMatchId: Dispatch<SetStateAction<string|null>>
}

