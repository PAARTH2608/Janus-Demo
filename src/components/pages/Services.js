import React from "react";
import styled from "styled-components";
import ServiceSVG from "../../images/Services.svg";
import Service from "../page-components/Service";
import Data from "../page-components/ServiceData";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;
const LargeText = styled.h1`
  color: #fff;
  font-size: 3rem;
`;

const RightDiv = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`;
const Image = styled.img``;
const Upper = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Lower = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Services = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <MediumText>Why Choose Us?</MediumText>
        <LargeText>Make Work Productive & Get Faster Solution</LargeText>
        <Image src={ServiceSVG} />
      </LeftDiv>
      <RightDiv>
        <Upper>
          {Data.slice(0, 2).map((item) => {
            return (
              <Service
                key={item.id}
                name={item.name}
                icon={item.icon}
                description={item.description}
              />
            );
          })}
        </Upper>
        <Lower>
        {Data.slice(2, 4).map((item) => {
            return (
              <Service
                key={item.id}
                name={item.name}
                icon={item.icon}
                description={item.description}
              />
            );
          })}
        </Lower>
      </RightDiv>
    </MainDiv>
  );
};

export default Services;
