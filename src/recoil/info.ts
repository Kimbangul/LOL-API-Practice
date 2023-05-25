import { atom } from "recoil";

// PARAM state
export const globalPuuId = atom<string>({
  key: 'globalPuuId',
  default: '',
});
