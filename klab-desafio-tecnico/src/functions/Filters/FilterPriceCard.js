import { FilterDefaultCard } from "./FilterDefaultCard";

export const FilterPriceCard = (parameters, upDown) => {
  if (upDown === "up") {
    const filterPriceCard = FilterDefaultCard(parameters).sort((a, b) => {
      if (a.valor < b.valor) return -1;

      if (a.valor > b.valor) return 1;

      return 0;
    });
    return filterPriceCard;
  } else if (upDown === "down") {
    const filterPriceCard = FilterDefaultCard(parameters).sort((a, b) => {
      if (a.valor > b.valor) return -1;

      if (a.valor < b.valor) return 1;

      return 0;
    });
    return filterPriceCard;
  }
};
