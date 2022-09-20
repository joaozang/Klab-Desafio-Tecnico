import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #d2d2d2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleDiv = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleStyle = styled.p`
  padding-left: 5px;
  font-size: 30px;
  font-weight: bold;
  border-left: 3px solid #7b0000;
`;
export const ProductsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const FiltersDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  flex-wrap: wrap;
`;
