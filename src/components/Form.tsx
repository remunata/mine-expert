import { useDataContext } from "../DataContext";
import { useResultContext } from "../ResultContext";
import evaluate from "../inferences/Inference";
import InputForm from "./InputForm";

export default function Form() {
  const { data, setData } = useDataContext();
  const { setResult } = useResultContext();

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

  const submit = async () => {
    const isGoodInvestment = await evaluate(data);
    setResult(isGoodInvestment);
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
          placeholder="eg. 300"
          data={data.jumlahProduksi}
          setData={setInputData}
        />
        <InputForm
          label="Biaya Operasional"
          name="biayaOperasional"
          unit="Juta / Tahun"
          placeholder="eg. 200"
          data={data.biayaOperasional}
          setData={setInputData}
        />
        <InputForm
          label="Harga Jual"
          name="hargaJual"
          unit="Juta / Ton"
          placeholder="eg. 30"
          data={data.hargaJual}
          setData={setInputData}
        />
        <InputForm
          label="Biaya Investasi Awal"
          name="biayaInvestasi"
          unit="Milyar"
          placeholder="eg. 400"
          data={data.biayaInvestasi}
          setData={setInputData}
        />
        <InputForm
          label="Estimasi Cadangan Mineral"
          name="estimasiCadangan"
          unit="Ton"
          placeholder="eg. 3800"
          data={data.estimasiCadangan}
          setData={setInputData}
        />
        <InputForm
          label="Tingkat Pengembalian yang Diharapkan"
          name="returnValue"
          unit="%"
          placeholder="eg. 25"
          data={data.returnValue}
          setData={setInputData}
        />
      </form>
      <button
        type="submit"
        className="btn-primary mt-10"
        onClick={() => submit()}
      >
        Submit Form
      </button>
    </div>
  );
}
