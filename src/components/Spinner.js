import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import spinner from "../assets/icons/spinner.svg";

const SpinnerWrap = styled.div`
  animation-name: fade-in;
  animation-duration: 1s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 40px;
    height: auto;
  }
`;

const Spinner = () => {
  const doFetch = useSelector(reduxStore => reduxStore.apiData.doFetch);

  return (
    <span>
      {doFetch === true ? (
        <SpinnerWrap>
          <img src={spinner} alt="Spinner icon" />
        </SpinnerWrap>
      ) : (
        <br />
      )}
    </span>
  );
};

export default Spinner;
