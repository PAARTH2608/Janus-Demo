import React from "react";
import styled from "styled-components";
import Cards from "../page-components/Cards";

const MainDiv = styled.div`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const MainHeading = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 0;
  font-family: Montserrat;
`;
const Box = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
const Paragraph = styled.p`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
`;

const Technologies = () => {
  return (
    <MainDiv>
      <MainHeading>Top Technologies We Work On</MainHeading>
      <Box>
        <Paragraph>
          Providing you with the cutting edge solutions that the tech world has
          to offer. Here are some of the latest tech that we thrive on .
        </Paragraph>
      </Box>
      <Cards />
    </MainDiv>
  );
};

export default Technologies;
