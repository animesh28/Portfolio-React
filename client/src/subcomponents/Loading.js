import styled from "styled-components";
import React from "react";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Box>
      <h1>Loading...</h1>
    </Box>
  );
};

export default Loading;
