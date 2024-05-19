import { createContext, useContext } from "react";

export type DataStruct = {
  jumlahProduksi: number;
  biayaOperasional: number;
  hargaJual: number;
  biayaInvestasi: number;
  estimasiCadangan: number;
  returnValue: number;
};

export type DataContent = {
  data: DataStruct;
  cfValues: number[];
  setData: (data: DataStruct) => void;
  setCfValues: (values: number[]) => void;
};

export const DataContext = createContext<DataContent>({
  data: <DataStruct>{},
  cfValues: [],
  setData: () => {},
  setCfValues: () => {},
});

export const useDataContext = () => useContext(DataContext);
