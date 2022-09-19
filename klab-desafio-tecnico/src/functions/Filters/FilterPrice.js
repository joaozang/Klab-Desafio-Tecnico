import { FilterDefault } from "./FilterDefault";

export const FilterPrice = (parameters, upDown) => {
  if (upDown === "up") {
    const filterPrice = FilterDefault(parameters).sort((a, b) => {
      if (a.valor < b.valor) return -1;

      if (a.valor > b.valor) return 1;

      return 0;
    });
    return filterPrice;
  } else if (upDown === "down") {
    const filterPrice = FilterDefault(parameters).sort((a, b) => {
      if (a.valor > b.valor) return -1;

      if (a.valor < b.valor) return 1;

      return 0;
    });
    return filterPrice;
  }
};
