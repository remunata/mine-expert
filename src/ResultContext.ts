import { createContext, useContext } from "react";

export type ResultContent = {
  result: string;
  setResult: (data: string) => void;
};

export const ResultContext = createContext<ResultContent>({
  result: '',
  setResult: () => {},
});

export const useResultContext = () => useContext(ResultContext);