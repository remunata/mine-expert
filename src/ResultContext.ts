import { createContext, useContext } from "react";

export type ResultContent = {
  result: string;
  cf: number;
  setResult: (data: string) => void;
  setCf: (data: number) => void;
};

export const ResultContext = createContext<ResultContent>({
  result: "",
  cf: 0,
  setResult: () => {},
  setCf: () => {},
});

export const useResultContext = () => useContext(ResultContext);
