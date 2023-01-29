import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 367px;
    height: 309px;
    margin: 20px 0;
    object-fit: cover;
  }
  h3 {
    padding-bottom: 10px;
  }
  @media (max-width: 960px) {
    img {
      width: 340px;
      height: 209px;
      margin: 5px auto;
    }
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;