import { FilterDefaultCard } from "./FilterDefaultCard";

export const FilterAlphabeticCard = (parameters, upDown) => {
  if (upDown === "up") {
    const filterAlphabeticCard = FilterDefaultCard(parameters).sort((a, b) => {
      if (a.produto < b.produto) return -1;

      if (a.produto > b.produto) return 1;

      return 0;
    });
    return filterAlphabeticCard;
  } else if (upDown === "down") {
    const filterAlphabeticCard = FilterDefaultCard(parameters).sort((a, b) => {
      if (a.produto > b.produto) return -1;

      if (a.produto < b.produto) return 1;

      return 0;
    });
    return filterAlphabeticCard;
  }
};
