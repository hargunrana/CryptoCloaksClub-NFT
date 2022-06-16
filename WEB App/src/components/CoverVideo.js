import React from "react";
import styled from "styled-components";
import GIF from "../assets/nft-preview.gif";

const VideoContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: auto;
        border-radius: 20%;
    }
`;

const CoverVideo = () => {
    return (
        <VideoContainer>
            {/* <video src={GIF} type="video/mp4" autoPlay muted loop /> */}
            <img src = {GIF}/>
        </VideoContainer>
    );
};

export default CoverVideo;
