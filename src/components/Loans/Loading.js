import React from "react";
import styled from "styled-components";

import spinner from "../../assets/icons/spinner-dark-blue.svg";

const Message = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: bold;
  margin-top: 30px;
`;

const SpinnerWrap = styled.div`
  animation-name: fade-in;
  animation-duration: 3s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 100px;
    height: auto;
  }
`;

const Loading = () => {
  return (
    <Message>
      <p>Načítání položek</p>
      <SpinnerWrap>
        <img src={spinner} alt="Spinner icon" />
      </SpinnerWrap>
    </Message>
  );
};

export default Loading;
