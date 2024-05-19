const evaluateProspect = async (
  investation: number,
  mineAge: string,
  returnValue: number
) => {
  if (investation <= 200) {
    if (mineAge === "panjang") {
      if (returnValue <= 20) {
        return "sedang";
      } else {
        return "bagus";
      }
    } else if (mineAge === "sedang") {
      if (returnValue > 25) {
        return "bagus";
      } else {
        return "sedang";
      }
    } else {
      if (returnValue > 25) {
        return "sedang";
      } else {
        return "kurang";
      }
    }
  } else {
    if (mineAge === "panjang") {
      if (returnValue > 25) {
        return "bagus";
      } else {
        return "sedang";
      }
    } else if (mineAge === "sedang") {
      if (returnValue <= 20) {
        return "kurang";
      } else if (returnValue <= 25) {
        return "sedang";
      } else {
        return "bagus";
      }
    } else {
      return "kurang";
    }
  }
};

export default evaluateProspect;
