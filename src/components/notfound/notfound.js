import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;

const NotFoundPage = () => (
    <NotFoundContainer>
        <H1>Not Found</H1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </NotFoundContainer>
);

export default NotFoundPage;
