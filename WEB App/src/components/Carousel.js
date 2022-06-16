import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img22 from "../assets/Carousel-Images/22.png";
import img105 from "../assets/Carousel-Images/105.png";
import img149 from "../assets/Carousel-Images/149.png";
import img162 from "../assets/Carousel-Images/162.png";
import img184 from "../assets/Carousel-Images/184.png";
import img214 from "../assets/Carousel-Images/214.png";
import img217 from "../assets/Carousel-Images/217.png";
import img230 from "../assets/Carousel-Images/230.png";
import img303 from "../assets/Carousel-Images/303.png";
import img467 from "../assets/Carousel-Images/467.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
    width: 30vw;
    height: 55vh;

    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${(props) => props.theme.carouselColor};
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-button-next {
        color: ${(props) => props.theme.text};
        right: 0;
        //top: 60%;
        width: 4rem;

        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &:after {
            display: none;
        }
    }

    .swiper-button-prev {
        color: ${(props) => props.theme.text};
        left: 0;
        //top: 60%;
        width: 4rem;
        transform: rotate(180deg);

        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &:after {
            display: none;
        }
    }

    img {
        width: 80%;
        height: auto;
        border-radius: 10%;
    }
`;

const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ type: "fraction" }}
                scrollbar={{
                    draggable: true,
                }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                navigation={true}
            >
                <SwiperSlide>
                    <img src={img22} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img105} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img149} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img162} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img184} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img214} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img217} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img230} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img303} alt="The Weirdos"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img467} alt="The Weirdos"></img>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Carousel;
