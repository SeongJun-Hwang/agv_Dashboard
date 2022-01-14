import React from "react";
import styled from "styled-components";

const Wrapper = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1 `
  font-size: 30px;
  color: ${(props) => props.theme.color};
`;

const App = () => {
  return (
   <Wrapper>
     <Title>Welcome back</Title>
   </Wrapper>
  );
}

export default App;
