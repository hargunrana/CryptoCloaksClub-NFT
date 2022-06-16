import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

// Images
import img22 from "../../assets/Carousel-Images/22.png";
import img105 from "../../assets/Carousel-Images/105.png";
import img149 from "../../assets/Carousel-Images/149.png";
import img162 from "../../assets/Carousel-Images/162.png";
import img184 from "../../assets/Carousel-Images/184.png";
import img214 from "../../assets/Carousel-Images/214.png";
import img217 from "../../assets/Carousel-Images/217.png";
import img230 from "../../assets/Carousel-Images/230.png";
import img303 from "../../assets/Carousel-Images/303.png";
import img467 from "../../assets/Carousel-Images/467.png";
import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    /* &>*:first-child{
        animation-duration: 20s;
    }
    &>*:last-child{
        animation-duration: 20s;
    } */
`;

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};
`;

const Row = styled.div`
    /* background-color: lightblue; */
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;

    animation: ${move} 20s linear infinite ${(props) => props.direction};
`;
const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: ${(props) => props.theme.text};
    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        border-radius: 20px 20px 0 0;
    }
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: ${(props) => props.theme.fontsm};
        color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
        font-weight: 600;
        line-height: 1.5rem;
    }

    h1 {
        font-size: ${(props) => props.theme.fontmd};
        color: ${(props) => props.theme.body};
        font-weight: 600;
    }
`;

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 1rem;
        height: auto;
    }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
    let play = (e) => {
        passRef.current.style.animationPlayState = "running";
    };

    let pause = (e) => {
        passRef.current.style.animationPlayState = "paused";
    };

    return (
        <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
            <img src={img} alt="the weirdos" />
            <Details>
                <div>
                    <span>Weirdos</span> <br />
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>Price</span>

                    <Price>
                        <img src={ETH} alt="ETH" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    );
};

const Showcase = () => {
    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

    return (
        <Section id = "showcase">
            <Row direction="none" ref={Row1Ref}>
                <NftItem
                    img={img22}
                    number={22}
                    price={1.5}
                    passRef={Row1Ref}
                />
                <NftItem
                    img={img105}
                    number={105}
                    price={1.5}
                    passRef={Row1Ref}
                />
                <NftItem
                    img={img149}
                    number={149}
                    price={1.5}
                    passRef={Row1Ref}
                />
                <NftItem
                    img={img162}
                    number={162}
                    price={1.5}
                    passRef={Row1Ref}
                />
                <NftItem
                    img={img184}
                    number={184}
                    price={1.5}
                    passRef={Row1Ref}
                />
            </Row>

            <Row direction="reverse" ref={Row2Ref}>
                <NftItem
                    img={img214}
                    number={214}
                    price={1.5}
                    passRef={Row2Ref}
                />
                <NftItem
                    img={img217}
                    number={217}
                    price={1.5}
                    passRef={Row2Ref}
                />
                <NftItem
                    img={img230}
                    number={230}
                    price={1.5}
                    passRef={Row2Ref}
                />
                <NftItem
                    img={img303}
                    number={303}
                    price={1.5}
                    passRef={Row2Ref}
                />
                <NftItem
                    img={img467}
                    number={467}
                    price={1.5}
                    passRef={Row2Ref}
                />
            </Row>
        </Section>
    );
};

export default Showcase;
