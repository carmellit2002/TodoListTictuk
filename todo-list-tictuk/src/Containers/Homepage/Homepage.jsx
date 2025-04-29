import React from "react";
import { HomepageContainer } from "./styles";
import TasksList from "../TasksList";

const Homepage = () => {
    return <HomepageContainer>
        <TasksList />
    </HomepageContainer>
}

export default Homepage;