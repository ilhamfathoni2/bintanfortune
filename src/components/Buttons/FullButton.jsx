import React from "react";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8 semiBold"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

export function FullButtonLink({ title, url, border }) {
  return (
    <Link href={url}>
      <Wrapper className="animate pointer radius8 semiBold" border={border}>
        <div>
          <BsWhatsapp color="white" size={18} />
        </div>
        <Gap marginRight="15px" />
        <div>{title}</div>
      </Wrapper>
    </Link>
  );
}

const Gap = styled.div`
  margin-right: ${(props) => props.marginRight || '0'};
`;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  font-family: Poppins, sans-serif;
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

const Link = styled.a`
  font-family: Poppins, sans-serif;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
`;
