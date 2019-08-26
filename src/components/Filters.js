import React from "react";
import styled from "styled-components";

import Filter from "./Filter";

const FilterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

function Filters() {
  return (
    <FilterWrap>
      <Filter filterType={"termInMonths"} text={"Délka splátky"} />
      <Filter filterType={"interestRate"} text={"Rating"} />
      <Filter filterType={"amount"} text={"Částka"} />
      <Filter filterType={"deadline"} text={"Konec splátky"} />
    </FilterWrap>
  );
}

export default Filters;
