import { atom, useAtom } from "jotai";

import { reels as mails } from "./data";

const configAtom = atom({
  selected: mails[0].author_id,
});

// Custom hook to use the mail configuration atom
export function useMail() {
  return useAtom(configAtom);
}
