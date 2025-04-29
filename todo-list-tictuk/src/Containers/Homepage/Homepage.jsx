import React from "react";
import { HomepageContainer } from "./styles";
import Header from "../../Components/Header";
import TasksList from "../TasksList";

const Homepage = () => {
    return <HomepageContainer>
        <Header />
        <TasksList />
    </HomepageContainer>
}

export default Homepage;