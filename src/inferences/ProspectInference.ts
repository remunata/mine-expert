const evaluateProspect = async (
  investation: number,
  mineAge: string,
  returnValue: number,
  cfValues: number[]
) => {
  const cf = Math.min(...cfValues);

  if (investation <= 200) {
    if (mineAge === "panjang") {
      if (returnValue <= 20) {
        return ["sedang", cf * 0.9];
      } else {
        return ["bagus", cf * 0.8];
      }
    } else if (mineAge === "sedang") {
      if (returnValue > 25) {
        return ["bagus", cf * 0.8];
      } else {
        return ["sedang", cf * 0.8];
      }
    } else {
      if (returnValue > 25) {
        return ["sedang", cf * 0.8];
      } else {
        return ["kurang", cf * 0.8];
      }
    }
  } else {
    if (mineAge === "panjang") {
      if (returnValue > 25) {
        return ["bagus", cf * 0.8];
      } else {
        return ["sedang", cf * 0.8];
      }
    } else if (mineAge === "sedang") {
      if (returnValue <= 20) {
        return ["kurang", cf * 1];
      } else if (returnValue <= 25) {
        return ["sedang", cf * 1];
      } else {
        return ["bagus", cf * 1];
      }
    } else {
      return ["kurang", cf * 1];
    }
  }
};

export default evaluateProspect;
