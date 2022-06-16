import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";
import { dark } from "../Styles/Themes";

import img22 from "../assets/Carousel-Images/22.png";
import img105 from "../assets/Carousel-Images/105.png";
import img149 from "../assets/Carousel-Images/149.png";
import img162 from "../assets/Carousel-Images/162.png";
import img184 from "../assets/Carousel-Images/184.png";
import img214 from "../assets/Carousel-Images/214.png";

const Section = styled.section`
    width: 100vw;
    height: 25rem;
    position: relative;
    border-top: 2px solid ${(props) => props.theme.text};
    border-top: 2px solid ${(props) => props.theme.text};

    background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;

const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;

    img {
        width: 15rem;
        height: auto;
        border-radius: 20%;
        padding-left: 1rem;
    }
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
    text-transform: capitalize;
    text-shadow: 1px 2px 2px ${(props) => props.theme.text};
`;
const BtnContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.theme.fontlg};
    z-index: 10;
`;
const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                <img src={img22} alt="CryptoCloaks" />
                <img src={img105} alt="CryptoCloaks" />
                <img src={img149} alt="CryptoCloaks" />
                <img src={img162} alt="CryptoCloaks" />
                <img src={img184} alt="CryptoCloaks" />
                <img src={img214} alt="CryptoCloaks" />
            </ImgContainer>

            <Title>
                Join the <br /> Crypto Cloaks Club
            </Title>
            <BtnContainer>
                <ThemeProvider theme={dark}>
                    <Button
                        text="Join Now"
                        link="https://opensea.io/collection/crypto-cloaks-club"
                    />
                </ThemeProvider>
            </BtnContainer>
        </Section>
    );
};

export default Banner;
