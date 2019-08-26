import React from "react";
import styled from "styled-components";

import Timer from "./Timer";
import Spinner from "./Spinner";

const Wrap = styled.div`
  position: relative;
  height: 180px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const SvgWrap = styled.div`
  position: absolute;
  top: 0;
  left: calc((100% - 400px) / 2);
`;

const OverviewContent = styled.div`
  position: relative;
  top: 0;
  left: 0;
  color: white;
  text-align: center;
  z-index: 10;
  font-size: 14px;
  font-family: "Roboto";
`;

const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Caveat Brush";
  letter-spacing: 5px;
  padding-top: 25px;
  padding-bottom: 10px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

const Overview = () => {
  return (
    <Wrap>
      <SvgWrap>
        <svg width="400" height="180">
          <path d="M0,0 a1.12,1 0 0,0 400,0" fill="rgb(0,43,54)" />
        </svg>
      </SvgWrap>

      <OverviewContent>
        <Heading>PŮJČKY</Heading>
        <Description>aktualizace dat:</Description>
        <Timer />
        <Spinner />
      </OverviewContent>
    </Wrap>
  );
};

export default Overview;
