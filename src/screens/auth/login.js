import React from "react";
import styled from "styled-components";
// Components
import HeaderImage from "../../assets/img/img-header-1.png";
import Dots from "../../assets/svg/Dots";

export default function Login() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="office"
            style={{ zIndex: 9, width: 428, height: 500, objectFit: "cover" }}
          />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
      </LeftSide>
      <Gap />
      <RightSide>
        <Card><h4>Login</h4></Card>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 10px;
  width: 100%;
  min-height: 660px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 10px;
  }
`;

const Gap = styled.div`
  margin-right: 10%;
  @media (max-width: 960px) {
    flex-direction: column;
    margin-right: 1px;
  }
`;

const Card = styled.div`
  padding: 25px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 500px;
  min-height: 300px;
  @media (max-width: 960px) {
    padding: 20px;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  padding: 80px;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -80px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 90px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
