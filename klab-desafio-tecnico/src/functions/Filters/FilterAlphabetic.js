import { FilterDefault } from "./FilterDefault";

export const FilterAlphabetic = (parameters, upDown) => {
  if (upDown === "up") {
    const filterAlphabetic = FilterDefault(parameters).sort((a, b) => {
      if (a.produto < b.produto) return -1;

      if (a.produto > b.produto) return 1;

      return 0;
    });
    return filterAlphabetic;
  } else if (upDown === "down") {
    const filterAlphabetic = FilterDefault(parameters).sort((a, b) => {
      if (a.produto > b.produto) return -1;

      if (a.produto < b.produto) return 1;

      return 0;
    });
    return filterAlphabetic;
  }
};
