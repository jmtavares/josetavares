import React from "react";
import styled from "@emotion/styled";
import SocialIcons from "../social-icons/social-icons";
import { H1 } from "../../styles/typography";

const HelloContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100vw;
`;

const Hello = () => (
    <HelloContainer>
        <H1>Jose Tavares</H1>
        <SocialIcons />
    </HelloContainer>
);

export default Hello;
