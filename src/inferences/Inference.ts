import { DataStruct } from "../DataContext";
import evaluateInvestment from "./InvestmentInference";
import evaluateMineAge from "./MineAgeInference";
import evaluateProfit from "./ProfitInference";
import evaluateProspect from "./ProspectInference";

const evaluate = async (data: DataStruct, cfValues: number[]) => {
  const [profit, cfProfit] = await evaluateProfit(
    data.jumlahProduksi,
    data.biayaOperasional,
    data.hargaJual,
    cfValues.slice(0, 3)
  );
  const [mineAge, cfMineAge] = await evaluateMineAge(
    data.estimasiCadangan,
    data.jumlahProduksi,
    [cfValues[0], cfValues[5]]
  );
  const [prospect, cfProspect] = await evaluateProspect(
    data.biayaInvestasi,
    String(mineAge),
    data.returnValue,
    [cfValues[3], Number(cfMineAge), cfValues[5]]
  );

  return await evaluateInvestment(String(profit), String(prospect), [
    Number(cfProfit),
    Number(cfProspect),
  ]);
};

export default evaluate;
