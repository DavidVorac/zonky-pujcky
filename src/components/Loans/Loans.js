import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeApiData } from "../../actions";

import LoanCard from "./LoanCard";
import Loading from "./Loading";
import Error from "./Error";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 10px auto 0;
`;

const LoansWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FakeCard = styled.div`
  min-width: 300px;
  margin: 25px 25px 50px;
`;

const Loans = () => {
  // Can call Redux Actions using dispatch()
  const dispatch = useDispatch();

  // Watch and set state from redux store
  const apiData = useSelector(reduxStore => reduxStore.apiData);

  // Initial data fetch from API + watcher for doFetch
  useEffect(() => {
    async function fetchApiData(url) {
      try {
        const apiResponse = await fetch(url);
        const apiDataInJson = await apiResponse.json();
        // Set new data to Redux store
        dispatch(
          changeApiData({
            isLoading: false,
            isError: false,
            doFetch: false,
            data: apiDataInJson
          })
        );
      } catch (err) {
        // Set new data to Redux store
        dispatch(
          changeApiData({
            ...apiData,
            isLoading: false,
            doFetch: false,
            isError: true
          })
        );
        console.log("ERROR!!!:", err);
      }
    }

    if (apiData.doFetch === true) {
      fetchApiData(
        "https://api.allorigins.win/raw?url=https://api.zonky.cz/loans/marketplace"
      );
    }
  }, [apiData.doFetch]);

  return (
    <Content>
      {apiData.isLoading === true ? (
        <Loading />
      ) : apiData.isError === true ? (
        <Error />
      ) : (
        <LoansWrap>
          {apiData.data.map(({ id, name, story, photos }, i) => (
            <LoanCard
              /* TODO - maybe pass only apiData.data[i] and re-distribute data inside component (can be faster) */
              key={id}
              data={apiData.data[i]}
              name={name}
              story={story}
              imgUrl={photos[0].url}
            />
          ))}
          <FakeCard />
        </LoansWrap>
      )}
    </Content>
  );
};

export default Loans;
