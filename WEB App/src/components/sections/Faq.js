import React from "react";
import styled from "styled-components";

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.text};
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;

    color: ${(props) => props.theme.body};

    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.body};
    width: fit-content;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: center;
    align-content: center;
`;



const Faq = () => {
    return (
        <Section>
            <Title>FAQs</Title>
            <Container></Container>
        </Section>
    );
};

export default Faq;
