import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeApiData } from "../actions";

const Timer = () => {
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
      <p>
        {minutes}:{seconds}
      </p>
    </span>
  );
};

export default Timer;
