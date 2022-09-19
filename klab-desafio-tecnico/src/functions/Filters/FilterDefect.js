import { FilterDefault } from "./FilterDefault";

export const FilterDefect = (parameters, upDown) => {
  if (upDown === "up") {
    const filterDefect = FilterDefault(parameters).sort((a, b) => {
      if (a.defeito < b.defeito) return -1;

      if (a.defeito > b.defeito) return 1;

      return 0;
    });
    return filterDefect;
  } else if (upDown === "down") {
    const filterDefect = FilterDefault(parameters).sort((a, b) => {
      if (a.defeito > b.defeito) return -1;

      if (a.defeito < b.defeito) return 1;

      return 0;
    });
    return filterDefect;
  }
};
