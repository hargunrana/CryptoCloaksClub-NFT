import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CloakLogo from "../assets/LogoDark.png";

const LogoText = styled.h1`
    font-family: "Akaya Telivigala", cursive;
    font-size: ${(props) => props.theme.fontxxxl};
    color: ${(props) => props.theme.text};
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Image = styled.div`
    img {
        width: 5rem;
        height: auto;
        transition: all 0.2s ease;
        padding-top: 10%;

        &:hover {
            transform: scale(1.1);
        }
    }
`;
const Logo = () => {
    return (
        <Link to="/">
            {/* <LogoText>👻</LogoText> */}
            <Image>
                <img src={CloakLogo} alt="logo" />
            </Image>
        </Link>
    );
};

export default Logo;
