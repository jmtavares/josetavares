import React from "react";
import styled from "@emotion/styled";
import SocialIcons from "../social-icons/social-icons";
import { H1 } from "../../styles/typography";

const HelloContainer = styled.div`
`;

const Hello = () => (
    <HelloContainer>
        <H1>Jose Tavares</H1>
        <SocialIcons />
    </HelloContainer>
);

export default Hello;
