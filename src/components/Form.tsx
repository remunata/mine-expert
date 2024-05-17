import { useDataContext } from "../DataContext";
import InputForm from "./InputForm";

export default function Form() {
  const { data, setData } = useDataContext();

  const setInputData = (inputData: number, label: string) => {
    switch (label) {
      case "jumlahProduksi": {
        setData({ ...data, jumlahProduksi: inputData });
        break;
      }
      case "biayaOperasional": {
        setData({ ...data, biayaOperasional: inputData });
        break;
      }
      case "hargaJual": {
        setData({ ...data, hargaJual: inputData });
        break;
      }
      case "biayaInvestasi": {
        setData({ ...data, biayaInvestasi: inputData });
        break;
      }
      case "estimasiCadangan": {
        setData({ ...data, estimasiCadangan: inputData });
        break;
      }
      case "returnValue": {
        setData({ ...data, returnValue: inputData });
        break;
      }
    }
  };

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-5xl text-sky-500 text-opacity-80">
        <span className="text-black">Keuntungan, </span>Nilai Investasi
        <br />
        Pertambanganmu
      </h1>
      <p className="mt-5 text-lg">
        Please fill out the below form as accurately as possible to
        <br />
        obtain an accurate investment feasibility evaluation
      </p>
      <form className="grid grid-cols-2 gap-x-20 gap-y-8 mt-10">
        <InputForm
          label="Estimasi Jumlah Produk"
          name="jumlahProduksi"
          unit="Ton / Tahun"
          data={data.jumlahProduksi}
          setData={setInputData}
        />
        <InputForm
          label="Biaya Operasional"
          name="biayaOperasional"
          unit="Rp / Tahun"
          data={data.biayaOperasional}
          setData={setInputData}
        />
        <InputForm
          label="Harga Jual"
          name="hargaJual"
          unit="Rp / Ton"
          data={data.hargaJual}
          setData={setInputData}
        />
        <InputForm
          label="Biaya Investasi Awal"
          name="biayaInvestasi"
          unit="Rp"
          data={data.biayaInvestasi}
          setData={setInputData}
        />
        <InputForm
          label="Estimasi Cadangan Mineral"
          name="estimasiCadangan"
          unit="Ton"
          data={data.estimasiCadangan}
          setData={setInputData}
        />
        <InputForm
          label="Tingkat Pengembalian yang Diharapkan"
          name="returnValue"
          unit="%"
          data={data.returnValue}
          setData={setInputData}
        />
      </form>
      <button type="submit" className="btn-primary mt-10">
        Submit Form
      </button>
    </div>
  );
}
