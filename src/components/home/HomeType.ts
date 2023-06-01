import { Dispatch, SetStateAction } from "react";
import {ResponseType} from '@/app/api/account/type';

export interface InputViewPropsType {
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  getSummonerInfo: () => void
}

export interface DetailResultType {
    nameList: nameListType[];
    time: string;
  }

  export interface nameListType {
    status: string;
    value: string;
  }
  
export interface ResultViewPropsType extends ResponseType {
  matchInfo: DetailResultType[];
  //matchInfo: UseQueryResult<DetailResultType[]>;
  isMatchLoading: "idle" | "error" | "loading" | "success";
}


