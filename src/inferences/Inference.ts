import { DataStruct } from "../DataContext";
import evaluateInvestment from "./InvestmentInference";
import evaluateMineAge from "./MineAgeInference";
import evaluateProfit from "./ProfitInference";
import evaluateProspect from "./ProspectInference";

const evaluate = async (data: DataStruct) => {
  const profit = await evaluateProfit(
    data.jumlahProduksi,
    data.biayaOperasional,
    data.hargaJual
  );
  const mineAge = await evaluateMineAge(data.estimasiCadangan, data.jumlahProduksi);
  const prospect = await evaluateProspect(data.biayaInvestasi, mineAge, data.returnValue);

  return await evaluateInvestment(profit, prospect);
};

export default evaluate;
