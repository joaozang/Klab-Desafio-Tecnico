import { Card } from "../components/Card/Card";
export const ShowAllProductsCard = (array) => {
  return array.map((itens, index) => {
    return (
      <Card
        key={index}
        image={itens.imagem}
        name={itens.produto}
        quantitySale={itens.quantidade - itens.defeito}
        price={itens.valor}
      />
    );
  });
};
