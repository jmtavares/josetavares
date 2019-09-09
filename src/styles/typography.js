import styled from "@emotion/styled";

export const H1 = styled.h1`
    font-size: 48px;
    color: #fff;
    margin: 0 0 20px 0;
    @media screen and (min-width: 768px) {
        h1 {
            font-size: 62px;
        }
    }
`;

export const GlobalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: "Jua", sans-serif;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    overflow: hidden;

    @keyframes Gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const Icon = styled.a`
    margin: 0 20px;
    display: inline-flex;
`;

export const Svg = styled.svg`
    width: 40px;
    height: 40px;
`;
