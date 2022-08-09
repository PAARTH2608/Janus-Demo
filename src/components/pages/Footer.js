import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Image from "../../images/janus-softwares.png";

const MainDiv = styled.div`
  height: 55vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #2b2b2b;
`;
const Helper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Left = styled.div`
  height: 80%;
  width: 40%;
  font-size: 1.3rem;
  color: #fff;
`;
const Right = styled.div`
  height: 80%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Rights = styled.div`
  color: #fff;
  font-size: 1.2rem;
`;
const Span = styled.span`
  color: turquoise;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 1rem;
`;
const Heading = styled.h1`
  color: #fff;
  margin-bottom: 0.2rem;
`;
const P = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;
const Color = styled.span`
  color: turquoise;
`;
const Footer = () => {
  const styles = {
    height: "150px",
    width: "50%",
  };
  return (
    <MainDiv>
      <Helper>
        <Left>
          Janus <Color>&nbsp;Softwares&nbsp;</Color> is a tech company with a
          mission to help companies extend their business with the help of
          technology. Founded in 2021, we have satisfied all our clients.
          <div>
            <img src={Image} style={styles} />
          </div>
        </Left>
        <Right>
          <Heading>About Us</Heading>
          <P>
            Address - Registered Office – Janus Softwares – 104/105, A Wing,
            Manas Residency, Veer Savarkar Marg, Teen Petrol Pump, Thane(W),
            Maharashtra, India – 400602
          </P>
          <Heading>Contact</Heading>
          <P>
            Anurag Baheti - <Color>CEO</Color>
          </P>
          <Span>
            <a href="https://wa.me/9029050299" target="_blank" rel="noreferrer">
              <FaWhatsapp className="contact" size={26} color="white" />{" "}
            </a>
            <a
              href="mailto: anil@aummetals.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="contact" size={26} color="white" />{" "}
            </a>
            <a href="tel:+919029050299" target="_blank" rel="noreferrer">
              {" "}
              <FiPhoneCall className="contact" size={26} color="white" />{" "}
            </a>
          </Span>
        </Right>
      </Helper>
      <Rights>Copyright © 2022 Constbase. All Rights Reserved</Rights>
    </MainDiv>
  );
};

export default Footer;
