import { atom, useAtom } from "jotai";

import { Instagram} from "./data";

const configAtom = atom({
  selected: Instagram[0].author_id,
});

// Custom hook to use the mail configuration atom
export function useInsta() {
  return useAtom(configAtom);
}
