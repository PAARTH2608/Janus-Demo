import React from "react";
import styled from "styled-components";
import HomeSVG from "../../images/Home.svg";

const MainDiv = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LeftDiv = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 4rem;
`;
const RightDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 4rem;
`;
const Image = styled.img``;
const HeadingOne = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 0;
  font-family: "Lora", sans-serif;
`;
const HeadingTwo = styled.h2`
  color: #fff;
  font-family: "Lora", sans-serif;
  font-weight: 300;
`;

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <HeadingOne>Trust.Flexibility.</HeadingOne>
        <HeadingOne>Communication.</HeadingOne>
        <HeadingTwo>
          We get projects done! Partnering with you, we build relationships to
          help drive your business to the next level with the latest
          technologies, while reducing cost and mitigating risk at your end. We
          provide outsourced solutions which can be delivered with either time
          and materials or fixed price fee structures. We specialize in small to
          medium-sized solutions under $1 million.
        </HeadingTwo>
      </LeftDiv>
      <RightDiv>
        <Image src={HomeSVG} />
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
