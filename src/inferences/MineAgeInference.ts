const evaluateMineAge = async (
  reserves: number,
  production: number,
  cfValues: number[]
) => {
  const cf = Math.min(...cfValues);

  if (reserves <= 3000) {
    if (production <= 200) {
      return ["sedang", cf * 0.9];
    } else {
      return ["pendek", cf * 0.8];
    }
  } else if (reserves <= 5000) {
    if (production <= 200) {
      return ["panjang", cf * 0.8];
    } else if (production <= 500) {
      return ["sedang", cf * 0.8];
    } else {
      return ["pendek", cf * 0.8];
    }
  } else {
    if (production > 500) {
      return ["sedang", cf * 0.9];
    } else {
      return ["panjang", cf * 0.8];
    }
  }
};

export default evaluateMineAge;
