import React from "react";
import { Router } from "./routes/Router";
import GlobalStyle from "./constants/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
