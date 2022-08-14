import React from "react";
import styled from "styled-components";
import Cards from "../page-components/Cards";

const MainDiv = styled.div`
  height: 145vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    align-items: flex-start;
    padding-top: 2rem;
    height: 200vh;
  }
`;
const MainHeading = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 0;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;
const Box = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`;
const Paragraph = styled.p`
  color: #fff;
  font-family: "Lora", sans-serif;
  font-size: 1.5rem;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
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
