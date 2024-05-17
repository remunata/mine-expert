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
  setData: (data: DataStruct) => void;
};

export const DataContext = createContext<DataContent>({
  data: <DataStruct>{},
  setData: () => {},
});

export const useDataContext = () => useContext(DataContext);
