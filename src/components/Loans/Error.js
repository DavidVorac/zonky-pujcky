import React from "react";
import styled from "styled-components";

import imgSadZebra from "../../assets/img/sad-zebra.png";

const Message = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: bold;
`;

const AdviceMsg = styled.div`
  font-weight: 400;
`;

const Img = styled.img`
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
`;

const Error = () => {
  return (
    <Message>
      <p>Jejda, data nelze načíst.</p>
      <AdviceMsg>Zkuste obnovit stránku nebo to zkusit později.</AdviceMsg>
      <Img src={imgSadZebra} alt="Sad Zebra Drawing" />
    </Message>
  );
};

export default Error;
