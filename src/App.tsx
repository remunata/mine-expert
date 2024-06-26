import { useState } from "react";
import { DataContext, DataStruct } from "./DataContext";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Result from "./components/Result";
import { ResultContext } from "./ResultContext";

export default function App() {
  const [data, setData] = useState<DataStruct>({
    jumlahProduksi: 0,
    biayaOperasional: 0,
    hargaJual: 0,
    biayaInvestasi: 0,
    estimasiCadangan: 0,
    returnValue: 0,
  });
  const [cfValues, setCfValues] = useState<number[]>([]);

  const [result, setResult] = useState<string>("");
  const [cf, setCf] = useState<number>(0);

  return (
    <div className="w-full py-10">
      <Header />
      <Hero />
      <DataContext.Provider value={{ data, cfValues, setData, setCfValues }}>
        <ResultContext.Provider value={{ result, cf, setResult, setCf }}>
          <Form />
          <Result />
        </ResultContext.Provider>
      </DataContext.Provider>
    </div>
  );
}
