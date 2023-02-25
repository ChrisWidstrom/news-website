import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import logo from '../img/omni_logo.png';

export const Header = () => {
    return (

        <>
        <SHeaderTop>
            <div>
                <span>Menu</span>
                <SLogo src={logo}/>
            </div>
            <div>
                <Button variant="outlined" size="small">Become Member</Button>
                <Button variant="contained" size="small" disableElevation>Log in</Button>
            </div>
        </SHeaderTop>

        <SHeaderBottom>
            <span>Top News</span>
            <span>Latest News</span>
            <span>Personalized News Feed</span> 
        </SHeaderBottom>
        </>
    )
}

const SHeaderTop = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;
`

const SHeaderBottom = styled.div`
    background: lightgray;
    display: flex;
    justify-content: space-evenly;
`

const SLogo = styled.img`
    width: 70px;
`