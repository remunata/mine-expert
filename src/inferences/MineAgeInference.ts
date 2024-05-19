const evaluateMineAge = async (reserves: number, production: number) => {
  if (reserves <= 3000) {
    if (production <= 200) {
      return "sedang";
    } else {
      return "pendek";
    }
  } else if (reserves <= 5000) {
    if (production <= 200) {
      return "panjang";
    } else if (production <= 500) {
      return "sedang";
    } else {
      return "pendek";
    }
  } else {
    if (production > 500) {
      return "sedang";
    } else {
      return "panjang";
    }
  }
};

export default evaluateMineAge;
