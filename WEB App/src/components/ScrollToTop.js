import React from "react";
import styled from "styled-components";

const Up = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
`;

const ScrollToTop = () => {
    return <Up>&#x2191</Up>;
};

export default ScrollToTop;
