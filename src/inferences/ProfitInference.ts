const evaluateProfit = async (
  production: number,
  operational: number,
  price: number
) => {
  if (production <= 200) {
    if (operational <= 300) {
      if (price <= 10) {
        return "rendah";
      } else if (price <= 30) {
        return "sedang";
      } else {
        return "bagus";
      }
    } else if (operational <= 500) {
      if (price > 30) {
        return "sedang";
      } else {
        return "rendah";
      }
    } else {
      return "rendah";
    }
  } else if (production <= 500) {
    if (operational <= 300) {
      return "bagus";
    } else if (operational <= 500) {
      if (price <= 10) {
        return "sedang";
      } else {
        return "bagus";
      }
    } else {
      if (price <= 10) {
        return "rendah";
      } else if (price <= 30) {
        return "sedang";
      } else {
        return "bagus";
      }
    }
  } else {
    if (operational > 500) {
      if (price <= 10) {
        return "rendah";
      } else if (price <= 30) {
        return "sedang";
      } else {
        return "bagus";
      }
    } else {
      return "bagus";
    }
  }
};

export default evaluateProfit;
