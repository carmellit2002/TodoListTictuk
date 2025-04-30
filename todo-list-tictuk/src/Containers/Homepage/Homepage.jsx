import React, { useEffect } from "react";
import { HomepageContainer } from "./styles";
import Header from "../../Components/Header";
import HomepageContent from "../HomepageContent";
import Footer from "../../Components/Footer";

const Homepage = () => {
    useEffect(() => {
        console.log("User visited: Homepage");
    }, []);

    return <HomepageContainer>
        <Header />
        <HomepageContent />
        <Footer />
    </HomepageContainer>
}

export default Homepage;