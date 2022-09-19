import { FilterDefault } from "./FilterDefault";

export const FilterSale = (parameters, upDown) => {
  if (upDown === "up") {
    const filterSale = FilterDefault(parameters).sort((a, b) => {
      if (a.quantidade - a.defeito < b.quantidade - b.defeito) return -1;

      if (a.quantidade - a.defeito > b.quantidade - b.defeito) return 1;

      return 0;
    });
    return filterSale;
  } else if (upDown === "down") {
    const filterSale = FilterDefault(parameters).sort((a, b) => {
      if (a.quantidade - a.defeito > b.quantidade - b.defeito) return -1;

      if (a.quantidade - a.defeito < b.quantidade - b.defeito) return 1;

      return 0;
    });
    return filterSale;
  }
};
