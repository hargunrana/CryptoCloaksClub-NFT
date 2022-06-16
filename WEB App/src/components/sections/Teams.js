import React from "react";
import styled from "styled-components";

//Images
import img1 from "../../assets/Carousel-Images/1704.png";
import img2 from "../../assets/Carousel-Images/7300.png";
import img3 from "../../assets/Carousel-Images/408.png";
import ConfettiComponent from "../Confetti";

const Section = styled.section`
    min-height: 50vh;
    width: 100vw;
    background-color: ${(props) => props.theme.body};
    position: relative;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;

    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.text};
    width: fit-content;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0;
    color: ${(props) => props.theme.body};
    margin: 5rem 1rem;
    position: relative;
    z-index: 5;
    backdrop-filter: blur(4px);

    border: 2px solid ${(props) => props.theme.text};
    border-radius: 20px;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-2rem) scale(1.2);
    }
`;

const ImageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    //background-color: ${(props) => props.theme.carouselColor};

    padding: 0.5rem;

    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        border: 1px solid ${(props) => props.theme.text};

        border-radius: 20px;
    }
`;

const Name = styled.h2`
    font-size: ${(props) => props.theme.fontlg};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    margin-top: 1rem;
`;

const Position = styled.h2`
    font-size: ${(props) => props.theme.fontmd};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
    font-weight: 400;
`;

const MemberComponent = ({ img, name = "", position = " " }) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name> {name}</Name>
            <Position>{position}</Position>
        </Item>
    );
};

const Teams = () => {
    return (
        <Section>
            <ConfettiComponent />
            <Title>Team</Title>
            <Container>
                <a href="https://www.instagram.com/raditya_rana/">
                    <MemberComponent
                        img={img1}
                        name="Raditya Rana"
                        position="Founder"
                    />
                </a>

                <a href="https://www.linkedin.com/in/hargunrana/">
                    <MemberComponent
                        img={img2}
                        name="Hargun Singh Rana"
                        position="Co-Founder"
                    />
                </a>

                <a href="https://www.linkedin.com/in/sahilpreet-singh-861806235/">
                    <MemberComponent
                        img={img3}
                        name="SahilPreet singh"
                        position="Co-Founder"
                    />
                </a>
            </Container>
        </Section>
    );
};

export default Teams;
