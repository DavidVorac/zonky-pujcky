import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeApiData } from "../actions";

const Wrap = styled.div`
  flex-basis: 100%;
  max-width: 145px;
  margin: 10px;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: rgb(0, 43, 54);
  border-radius: 10px;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ArrowsWrap = styled.div`
  display: flex;

  > div:first-child {
    margin-right: 10px;
  }
`;

const ArrowWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.45);
  transition: opacity 0.2s;

  &:first-child {
    & > :first-child {
      transform: rotateX(-180deg);
    }
  }
`;

const Arrow = styled.div`
  width: 0px;
  height: 0px;
  margin: 0 8px;
  border-color: rgb(0, 43, 54) transparent;
  border-style: solid;
  border-width: 12px 7px 0px 7px;
  transition: transform 0.3s;
`;

const FilterButton = props => {
  // Can call Redux Actions using dispatch()
  const dispatch = useDispatch();

  // Is triggered by (every render) && (every Redux state change)
  // Return if ('this' = 'props.filterType') Filter component should change
  const sortBy = useSelector(reduxStore => {
    if (reduxStore.apiData.filter === props.filterType) {
      return reduxStore.apiData.sortBy;
    }
  });

  const apiData_Data = useSelector(reduxStore => reduxStore.apiData.data);

  // Do when clicked on sorting Arrow Wrap
  function handleFilterToggle(thisFilter, thisSortBy) {
    if (thisSortBy !== sortBy) {
      dispatch(
        changeApiData({
          filter: thisFilter,
          sortBy: thisSortBy,
          data: sortData(thisFilter, thisSortBy, apiData_Data)
        })
      );
    }
  }

  // Sorting data
  const sortData = (thisFilter, thisSortBy, apiData_Data) => {
    if (thisSortBy === "ASC") {
      if (thisFilter !== "deadline") {
        return apiData_Data.sort((a, b) => a[thisFilter] - b[thisFilter]);
      } else {
        return apiData_Data.sort(
          (a, b) => new Date(a[thisFilter]) - new Date(b[thisFilter])
        );
      }
    }

    if (thisSortBy === "DESC") {
      if (thisFilter !== "deadline") {
        return apiData_Data.sort((a, b) => b[thisFilter] - a[thisFilter]);
      } else {
        return apiData_Data.sort(
          (a, b) =>
            new Date(b[thisFilter]).getTime() -
            new Date(a[thisFilter]).getTime()
        );
      }
    }
    return apiData_Data;
  };

  // Styling for Arrow Wraps
  const ArrowWrapAsc = styled(ArrowWrap)`
    background: ${sortBy === "ASC" ? "rgba(255, 255, 255, 0.95)" : null};
    &:hover {
      opacity: ${sortBy === "ASC" ? 1 : 0.6};
    }
  `;
  const ArrowWrapDesc = styled(ArrowWrap)`
    background: ${sortBy === "DESC" ? "rgba(255, 255, 255, 0.95)" : null};
    &:hover {
      opacity: ${sortBy === "DESC" ? 1 : 0.6};
    }
  `;

  return (
    <Wrap>
      <Btn>
        <Text>{props.text}</Text>
        <ArrowsWrap>
          <ArrowWrapAsc
            onClick={() => handleFilterToggle(props.filterType, "ASC")}
          >
            <Arrow />
          </ArrowWrapAsc>
          <ArrowWrapDesc
            onClick={() => handleFilterToggle(props.filterType, "DESC")}
          >
            <Arrow />
          </ArrowWrapDesc>
        </ArrowsWrap>
      </Btn>
    </Wrap>
  );
};

export default FilterButton;
