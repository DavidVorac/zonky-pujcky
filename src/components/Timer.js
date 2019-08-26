import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeApiData } from "../actions";

import spinner from "../assets/icons/spinner.svg";

const Updater = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-family: "Roboto";
`;

const Description = styled.p`
  font-weight: bold;
`;

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

function Timer() {
  const initialCountTime = 300;

  // Can call Redux Actions using dispatch()
  const dispatch = useDispatch();

  const apiData = useSelector(reduxStore => reduxStore.apiData);
  let [count, setCount] = useState(initialCountTime);

  // Timer Formating to always two digits
  let minutes = Math.floor(count / 60);
  minutes = ("0" + minutes).slice(-2);
  let seconds = count % 60;
  seconds = ("0" + seconds).slice(-2);

  // Set up the interval
  useEffect(() => {
    function tick() {
      if (count > 0) {
        setCount(count - 1);
      }
    }

    if (count > 0) {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }

    dispatch(
      changeApiData(
        {
          ...apiData,
          doFetch: true
        },
        "TIMER_EXPIRED"
      )
    );
  }, [count]);

  useEffect(() => {
    if (apiData.doFetch === false) {
      setCount(initialCountTime);
    }
  }, [apiData.doFetch]);

  return (
    <span>
      <Updater>
        <Description>aktualizace dat:</Description>
        <p>
          {minutes}:{seconds}
        </p>
      </Updater>
      {apiData.doFetch === true ? (
        <SpinnerWrap>
          <img src={spinner} alt="Spinner icon" />
        </SpinnerWrap>
      ) : (
        <br />
      )}
    </span>
  );
}

export default Timer;
