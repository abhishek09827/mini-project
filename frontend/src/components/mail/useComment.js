import { atom, useAtom } from "jotai";

import { comments, reels as mails } from "./data";

const configAtom = atom({
  selected: comments[0].author_id,
});

// Custom hook to use the mail configuration atom
export function useComm() {
  return useAtom(configAtom);
}
