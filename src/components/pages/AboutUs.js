import React from "react";
import styled from "styled-components";
import About from "../../images/About.svg";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LeftDiv = styled.div`
  height: 100vh;
  width: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4rem;
`;
const MediumText = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: "Lora", sans-serif;
`;
const LargeText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-family: "Lora", sans-serif;
`;

const RightDiv = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 4rem;
`;
const Image = styled.img``;

const AboutUs = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <MediumText>Who We Are?</MediumText>
        <LargeText>
          We Have Qualified Powerful Team To Do It More Faster, Better & Smarter
        </LargeText>
        <MediumText>
          Here at Janus Softwares we have qualified team who have worked on
          numerous technologies and frameworks and can provide you with top
          notch service , be it an existing project or anew one, our team is
          here to handle em all. We have worked on various technologies and have
          provided our clients the best work they can think of, our team has the
          best approach in finding solutions to various problems and creating
          the art that may serve our clients and take their business to the next
          level.
        </MediumText>
      </LeftDiv>
      <RightDiv>
        <Image src={About} />
      </RightDiv>
    </MainDiv>
  );
};

export default AboutUs;
