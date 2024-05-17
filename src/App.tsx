import { useState } from "react";
import { DataContext, DataStruct } from "./DataContext";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Result from "./components/Result";

export default function App() {
  const [data, setData] = useState<DataStruct>({
    jumlahProduksi: 0,
    biayaOperasional: 0,
    hargaJual: 0,
    biayaInvestasi: 0,
    estimasiCadangan: 0,
    returnValue: 0,
  });

  return (
    <div className="w-full py-10">
      <Header />
      <Hero />
      <DataContext.Provider value={{ data, setData }}>
        <Form />
        <Result />
      </DataContext.Provider>
    </div>
  );
}
