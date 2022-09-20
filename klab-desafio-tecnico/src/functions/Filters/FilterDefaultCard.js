export const FilterDefaultCard = (parameters) => {
  const FilterDefaultArrayCard = parameters.cloneProducts.filter((item) => {
    return item.produto.toLowerCase().includes(parameters.search.toLowerCase());
  });

  return FilterDefaultArrayCard;
};
