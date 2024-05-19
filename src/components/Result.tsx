import { useResultContext } from "../ResultContext";
import Valid from "../svgs/Valid";
import Error from "../svgs/Error";

export default function Result() {
  const { result } = useResultContext();

  return result === "layak" ? (
    <div className="px-20 py-10">
      <h1 className="text-5xl font-bold">Hasil Analisis</h1>
      <p className="text-lg mt-3">
        Berikut hasil analisis kelayakan tambang Anda
      </p>
      <div className="flex flex-col items-center py-20">
        <h2 className="text-5xl font-semibold text-opacity-80 text-center">
          Investasi Tambang anda dinyatakan
        </h2>
        <h2 className="text-sky-500 font-semibold text-5xl text-center text-opacity-80 mt-5">
          LAYAK
        </h2>
        <Valid className="h-52 w-52 mt-20 text-sky-600" />
      </div>
    </div>
  ) : (
    result === "tidakLayak" && (
      <div className="px-20 py-10">
        <h1 className="text-5xl font-bold">Hasil Analisis</h1>
        <p className="text-lg mt-3">
          Berikut hasil analisis kelayakan tambang Anda
        </p>
        <div className="flex flex-col items-center py-20">
          <h2 className="text-5xl font-semibold text-opacity-80 text-center">
            Investasi Tambang anda dinyatakan
          </h2>
          <h2 className="text-red-500 font-semibold text-5xl text-center text-opacity-80 mt-5">
            TIDAK LAYAK
          </h2>
          <Error className="h-52 w-52 mt-20 text-red-600" />
        </div>
      </div>
    )
  );
}
