import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import LinkedIn from "../Icons/LinkedIn";
const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.body};
    position: relative;
    color: ${(props) => props.theme.text};

    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme.text};
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IconList = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    & > * {
        padding-right: 0.5rem;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`;
const MenuItems = styled.ul`
    list-style: none;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const MenuItem = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background: ${(props) => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Footer = () => {
    const scrollTo = (id) => {
        let element = document.getElementById(id);

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };
    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href="http://www.facebook.com">
                            <Facebook />
                        </a>

                        <a href="http://www.instagram.com/thecryptocloaksclub">
                            <Instagram />
                        </a>

                        <a href="http://www.facebook.com">
                            <Twitter />
                        </a>

                        <a href="http://www.linkedin.com/in/hargunrana">
                            <LinkedIn />
                        </a>
                    </IconList>
                </Left>
                <MenuItems>
                <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo("roadmap")}>
                        Roadmap
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo("showcase")}>
                        Showcase
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
                    <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
                </MenuItems>
            </Container>

            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Crypto Cloaks Club. All
                    rights Reserved.
                </span>
                <span>Made with by ♥️ Hargun Singh Rana</span>
            </Bottom>
        </Section>
    );
};

export default Footer;
