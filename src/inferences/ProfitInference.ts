const evaluateProfit = async (
  production: number,
  operational: number,
  price: number,
  cfValues: number[]
) => {
  const cf = Math.min(...cfValues);

  if (production <= 200) {
    if (operational <= 300) {
      if (price <= 10) {
        return ["rendah", cf * 1];
      } else if (price <= 30) {
        return ["sedang", cf * 0.8];
      } else {
        return ["bagus", cf * 0.8];
      }
    } else if (operational <= 500) {
      if (price > 30) {
        return ["sedang", cf * 0.9];
      } else {
        return ["rendah", cf * 1];
      }
    } else {
      return ["rendah", cf * 1];
    }
  } else if (production <= 500) {
    if (operational <= 300) {
      return ["bagus", cf * 0.8];
    } else if (operational <= 500) {
      if (price <= 10) {
        return ["sedang", cf * 0.8];
      } else {
        return ["bagus", cf * 0.8];
      }
    } else {
      if (price <= 10) {
        return ["rendah", cf * 0.8];
      } else if (price <= 30) {
        return ["sedang", cf * 0.9];
      } else {
        return ["bagus", cf * 1];
      }
    }
  } else {
    if (operational > 500) {
      if (price <= 10) {
        return ["rendah", cf * 0.8];
      } else if (price <= 30) {
        return ["sedang", cf * 0.8];
      } else {
        return ["bagus", cf * 0.8];
      }
    } else {
      return ["bagus", cf * 0.8];
    }
  }
};

export default evaluateProfit;
