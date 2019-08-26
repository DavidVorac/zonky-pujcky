import React from "react";
import JSONTree from "react-json-tree";
import styled from "styled-components";

const DataWrapStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.93);
  text-align: left;
  z-index: 99;
  overflow: auto;
  cursor: default;
`;

const Spacing = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px;

  > ul {
    display: table;
    width: 100%;
    max-width: 800px;
    margin: 0 !important;
    margin-bottom: 20px !important;
    padding: 30px !important;
    border-radius: 10px;
  }
`;

const CloseBtn = styled.div`
  position: fixed;
  top: 25px;
  right: 40px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 25px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
  z-index: 999;

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }
`;

const CloseText = styled.div`
  color: rgb(0, 43, 54);
  font-size: 16px;
  font-family: Calibri;
  font-weight: bold;
`;

const JsonLightbox = props => {
  const DataWrap = styled(DataWrapStyles)`
    display: ${props.visible ? "flex" : "none"};
  `;

  return (
    <DataWrap>
      <CloseBtn onClick={() => props.callback()}>
        <CloseText>Zavřít JSON</CloseText>
      </CloseBtn>
      <Spacing>
        <JSONTree data={props.data} />
      </Spacing>
    </DataWrap>
  );
};

export default JsonLightbox;
