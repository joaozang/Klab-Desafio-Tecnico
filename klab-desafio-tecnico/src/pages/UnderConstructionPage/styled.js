import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #d2d2d2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Gif = styled.img`
  width: 300px;
  height: 300px;
`;
export const Text = styled.div`
  margin-bottom: 20px;
  display: flex;
  font-weight: bold;
`;
export const BackButton = styled.button`
  margin-top: 30px;
  padding: 10px;
  cursor: pointer;
`;
