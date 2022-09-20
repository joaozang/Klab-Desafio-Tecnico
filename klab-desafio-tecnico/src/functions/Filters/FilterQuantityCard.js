import { FilterDefaultCard } from "./FilterDefaultCard";

export const FilterQuantityCard = (parameters, upDown) => {
  if (upDown === "up") {
    const filterQuantityCard = FilterDefaultCard(parameters).sort((a, b) => {
      if (a.quantidade - a.defeito < b.quantidade - b.defeito) return -1;

      if (a.quantidade - a.defeito > b.quantidade - b.defeito) return 1;

      return 0;
    });
    return filterQuantityCard;
  } else if (upDown === "down") {
    const filterQuantityCard = FilterDefaultCard(parameters).sort((a, b) => {
      if (a.quantidade - a.defeito > b.quantidade - b.defeito) return -1;

      if (a.quantidade - a.defeito < b.quantidade - b.defeito) return 1;

      return 0;
    });
    return filterQuantityCard;
  }
};
