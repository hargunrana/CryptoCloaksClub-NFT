import { ThemeProvider } from "styled-components";
// import { Navigation } from "swiper";
import GlobalStyles from "./Styles/GlobalStyles";
import { dark, light } from "./Styles/Themes";

import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import RoadMap from "./components/sections/RoadMap";
import Showcase from "./components/sections/Showcase";
import Teams from "./components/sections/Teams";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={light}>
                <Navigation />
                <Home />
                <About />
                <RoadMap />
                <Showcase />
                <Teams />
                <Faq />
                <Footer />
                {/* <ScrollToTop /> */}
            </ThemeProvider>
        </>
    );
}

export default App;
