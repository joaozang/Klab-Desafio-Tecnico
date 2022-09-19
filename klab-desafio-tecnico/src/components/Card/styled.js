import styled from "styled-components";

export const ContainerGeral = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 500px;
  height: 250px;
  background-color: #d88787;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  @media (max-width: 525px) {
    width: 300px;
    height: 200px;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  @media (max-width: 525px) {
    height: 130px;
    width: 130px;
  }
`;
export const DetailsDiv = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ProductName = styled.p`
  font-weight: bold;
  @media (max-width: 525px) {
    font-size: 10px;
  }
`;
export const ProductQuantity = styled.div`
  display: flex;
  @media (max-width: 525px) {
    font-size: 10px;
  }
`;
export const QuantityNumber = styled.p`
  font-weight: bold;
  margin-left: 10px;
  @media (max-width: 525px) {
    font-size: 10px;
  }
`;
export const ProductPrice = styled.p`
  font-weight: bold;
  @media (max-width: 525px) {
    font-size: 10px;
  }
`;
export const NotFoundText = styled.p`
  font-weight: bold;
`;
