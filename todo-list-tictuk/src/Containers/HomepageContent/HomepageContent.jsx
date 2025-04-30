import React, { useState } from "react";
import { HomepageContentContainer } from "./styles";
import CategoryDropdownFilter from "../../Components/CategoryDropdownFilter";
import TasksList from "../TasksList";

const HomepageContent = () => {
    const [categoryFilter, setCategoryFilter] = useState();

    return <HomepageContentContainer>
        <CategoryDropdownFilter onCategorySelect={setCategoryFilter} />
        <TasksList categoryFilter={categoryFilter} />
    </HomepageContentContainer>
}

export default HomepageContent;