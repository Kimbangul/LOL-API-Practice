import { Dispatch, SetStateAction } from "react";
import {ResponseType} from '@/app/api/account/type';

export interface InputViewPropsType {
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  getSummonerInfo: () => void
}

export interface ResultViewPropsType extends ResponseType {
  matchInfo: string[];
  setSelectedMatchId: Dispatch<SetStateAction<string|null>>
}

