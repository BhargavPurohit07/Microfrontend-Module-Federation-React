import { useAtom, atom } from "jotai";
// import { atomWithStorage } from "jotai/utils";
import { createReactObservable } from "react-windowed-observable";

// const userDataAtom = atomWithStorage("user", null);
const userDataAtom = atom(null);

const useUserData = () => useAtom(userDataAtom);

export const { useObservable, ObservableProvider, observable } =
  createReactObservable("login");

export default useUserData;
