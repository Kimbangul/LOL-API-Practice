import { Dispatch, SetStateAction } from "react";
import {ResponseType} from '@/app/api/account/type';

export interface InputViewPropsType {
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>
  getSummonerInfo: () => Promise<void>
}

export interface ResultViewPropsType extends ResponseType {
}

