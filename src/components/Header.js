import React from "react";
import styled from "styled-components";

export const Header = () => {
    return (
        <SContainer>
            <SColumn1>
                Menu
                Omni
            </SColumn1>
            <SColumn2>
                Become Member
                Log in
            </SColumn2>
        </SContainer>
    )
}

const SContainer = styled.div`
    background: green;
    display: flex;
    justify-content: space-between;
`
const SColumn1 = styled.div`

`

const SColumn2 = styled.div`

`
