import React from "react";
import { HomepageContainer } from "./styles";
import Header from "../../Components/Header";
import TasksList from "../TasksList";
import Footer from "../../Components/Footer";

const Homepage = () => {
    return <HomepageContainer>
        <Header />
        <TasksList />
        <Footer />
    </HomepageContainer>
}

export default Homepage;