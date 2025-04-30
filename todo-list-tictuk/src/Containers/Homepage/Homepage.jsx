import React from "react";
import { HomepageContainer } from "./styles";
import Header from "../../Components/Header";
import HomepageContent from "../HomepageContent";
import Footer from "../../Components/Footer";

const Homepage = () => {
    return <HomepageContainer>
        <Header />
        <HomepageContent />
        <Footer />
    </HomepageContainer>
}

export default Homepage;