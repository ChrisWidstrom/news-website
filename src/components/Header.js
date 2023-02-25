import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import logo from "../img/omni_logo.png";

export const Header = () => {
  return (
    <SContainer>
      <SLogoAndMenu>
        <span>Menu</span>
        <SLogo src={logo} />
      </SLogoAndMenu>

      <SButtons>
        <Button variant="outlined" size="small">
          Become Member
        </Button>
        <Button variant="contained" size="small" disableElevation>
          Log in
        </Button>
      </SButtons>

      <SLinks>
        <span>Top News</span>
        <span>Latest News</span>
        <span>Personalized News Feed</span>
      </SLinks>
    </SContainer>
  );
};

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
  align-items: center;

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
