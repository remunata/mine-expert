import CarbonResult from "../svgs/CarbonResult";
import Presentation from "../svgs/Presentation";
import Trackpad from "../svgs/Trackpad";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="px-20 py-10" id="hero">
      <h1 className="text-4xl font-bold">How it works?</h1>
      <p className="mt-3 font-lg">
        Gain insight into evaluating investment risk effectively
      </p>
      <div className="grid grid-cols-3 mt-8 gap-x-20">
        <HeroCard
          icon={<Trackpad />}
          title="Input Data"
          detail="Isi formulir penilaian dengan detail tentang investasi pertambangan Anda, termasuk lokasi, jenis pertambangan, biaya operasional, dan faktor risiko lainnya."
        />
        <HeroCard
          icon={<Presentation />}
          title="Analisis Otomatis"
          detail="Dengan mempertimbangkan kriteria kelayakan yang telah ditentukan, sistem kami melakukan evaluasi menyeluruh untuk menentukan potensi investasi Anda."
        />
        <HeroCard
          icon={<CarbonResult />}
          title="Hasil yang Akurat"
          detail="Sistem kami memberikan skor kelayakan secara keseluruhan serta detail penilaian untuk setiap kriteria, memberi Anda pemahaman yang jelas tentang potensi keuntungan dan risiko investasi Anda."
        />
      </div>
    </div>
  );
}
