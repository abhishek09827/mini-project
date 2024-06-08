import { atom, useAtom } from "jotai";
import { LinkedIn, Instagram, Twitter } from "./data";

const configAtom = atom({
  selected: LinkedIn[0].author_id,
});

// Custom hook to use the mail configuration atom
export function useMail(selectedAccount) {


  return useAtom(configAtom);
}
