const evaluateInvestment = async (
  profit: string,
  prospect: string,
  cfValues: number[]
) => {
  const cf = Math.min(...cfValues);

  if (profit === "bagus") {
    if (prospect === "kurang") {
      return ["tidakLayak", cf * 1];
    } else {
      return ["layak", cf * 1];
    }
  } else if (profit === "sedang" && prospect === "bagus") {
    return ["layak", cf * 1];
  } else {
    return ["tidakLayak", cf * 1];
  }
};

export default evaluateInvestment;
