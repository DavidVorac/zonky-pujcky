import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Overview from "./components/Overview";
import Filters from "./components/Filters";
import Loans from "./components/Loans/Loans";

const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: scroll;
  }
`;

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
`;

const App = () => {
  return (
    <AppWrap>
      <GlobalStyles />
      <Overview />
      <Filters />
      <Loans />
    </AppWrap>
  );
};

export default App;
