import { FilterDefault } from "./FilterDefault";

export const FilterQuantity = (parameters, upDown) => {
  if (upDown === "up") {
    const filterQuantity = FilterDefault(parameters).sort((a, b) => {
      if (a.quantidade < b.quantidade) return -1;

      if (a.quantidade > b.quantidade) return 1;

      return 0;
    });
    return filterQuantity;
  } else if (upDown === "down") {
    const filterQuantity = FilterDefault(parameters).sort((a, b) => {
      if (a.quantidade > b.quantidade) return -1;

      if (a.quantidade < b.quantidade) return 1;

      return 0;
    });
    return filterQuantity;
  }
};
