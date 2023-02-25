import React from "react";
import styled, { css }from "styled-components";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../img/omni_logo.png";

export const Header = () => {
  return (
    <SContainer>
      <SLogoAndMenu>
        <SMenuButton><MenuIcon/></SMenuButton>
        <SLogo src={logo} />
      </SLogoAndMenu>

      <SButtons>
        <SButton outline>
          Join
        </SButton>
        <SButton>
          Log in
        </SButton>
      </SButtons>

      <SLinks>
        <SLinkButton>Top News</SLinkButton>
        <SLinkButton>Latest News</SLinkButton>
        <SLinkButton>Personalized</SLinkButton>
      </SLinks>
    </SContainer>
  );
};

const SButton = styled.button`
    border-radius: 30px;
    width: 110px;
    margin: 8px 7px 8px 0;
    border: none;
    background: #678D81;
    color: white;

    ${props => props.outline && css`
        background: white;
        border: 1px solid #678D81;
        color: #678D81;
    `}
`

const SMenuButton = styled.button`
    border: none;
    background: white;
    padding: 0 8px;
`

const SContainer = styled.div`
  display: grid;
  grid-template-areas:
    "logoAndMenu buttons"
    "links links";
    @media screen and (min-width: 1024px) {
    grid-template-areas:
        "logoAndMenu links buttons"
  }
`;

const SLogoAndMenu = styled.div`
  grid-area: logoAndMenu;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: white;
  height: 50px;
  border-bottom: 0.7px solid lightgray;
`;

const SLinkButton = styled.div`

`

const SButtons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: flex-end;

  background: white;
  border-bottom: 0.7px solid lightgray;
`;

const SLinks = styled.div`
  grid-area: links;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 500;

  background: #FAFAFA;
  height: 30px;
  box-shadow: 1px 1px 3px lightgray;

  @media screen and (min-width: 1024px) {
    background: white;
    box-shadow: none;
    border-bottom: 0.7px solid lightgray;
    height: 100%;
  }
`;

const SLogo = styled.img`
  width: 70px;
`;
