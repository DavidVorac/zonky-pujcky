import React, { useState, useEffect } from "react";
import styled from "styled-components";
import JsonLightbox from "./JsonLightbox";

const Wrapper = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 300px;
  min-height: 400px;
  display: flex;
  margin: 25px 25px 50px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
  overflow: hidden;

  animation-name: fade-in;
  animation-duration: 1s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrap = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Heading = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 25px;
`;

const Btn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 43, 54);
  border-radius: 10px;
  margin-top: auto;
  padding: 13px 30px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(0, 43, 54, 0.85);
  }
`;

const BtnText = styled.p`
  font-size: 15px;
  font-family: "Roboto";
  font-weight: bold;
  color: white;
`;

const LoanCard = React.memo(function LoanCard(props) {
  console.log("RENDERED");
  // TODO - test speed -> This solution vs Using Redux state

  // Lightbox state
  const [visible, setVisible] = useState(false);

  // Lightbox handle state change
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "visible";
    return () => (document.body.style.overflow = "visible");
  }, [visible]);

  // Lightbox handle close from child
  const handleCloseFromChild = () => {
    setVisible(false);
  };

  // Text trimmer
  function checkText(maxWords, maxChars) {
    let storyText = props.story;
    let compareText = storyText.split(" ").filter(n => n !== "");
    if (compareText.length > maxWords) {
      storyText = compareText.slice(0, maxWords).join(" ");
    }

    if (storyText.length > maxChars) {
      let trimText = storyText.substr(0, maxChars);
      trimText = trimText.substr(
        0,
        Math.min(trimText.length, trimText.lastIndexOf(" "))
      );
      return (trimText += "...");
    }
    return storyText;
  }

  return (
    <Wrapper>
      <JsonLightbox
        data={props.data}
        callback={() => handleCloseFromChild()}
        visible={visible}
      />

      <Content>
        <ImgWrap>
          <img
            src={`https://api.zonky.cz/api` + props.imgUrl}
            alt="Obrázek půjčky"
          />
        </ImgWrap>
        <TextWrap>
          <Heading>{props.name}</Heading>
          <Description>{checkText(20, 200)}</Description>
          <Btn onClick={() => setVisible(true)}>
            <BtnText>Zobrazit JSON</BtnText>
          </Btn>
        </TextWrap>
      </Content>
    </Wrapper>
  );
});

export default LoanCard;
