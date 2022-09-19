export const FilterDefault = (parameters) => {
  const FilterDefaultArray = parameters.cloneProducts.filter((item) => {
    return (
      item.produto.toLowerCase().includes(parameters.search.toLowerCase()) &&
      item.quantidade >= parameters.quantityFilter &&
      item.defeito >= parameters.defectFilter &&
      item.quantidade - item.defeito >= parameters.saleFilter
    );
  });

  return FilterDefaultArray;
};
