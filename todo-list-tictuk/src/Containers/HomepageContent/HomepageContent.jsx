import React, { useState } from "react";
import { HomepageContentContainer } from "./styles";
import CategoryDropdownFilter from "../../Components/CategoryDropdownFilter";
import TasksList from "../TasksList";

const HomepageContent = () => {
    const [categoryFilter, setCategoryFilter] = useState();

    return <HomepageContentContainer>
        <CategoryDropdownFilter
            placeholder={"Filter"}
            onCategorySelect={setCategoryFilter}
            defaultCategory={categoryFilter}
        />
        <TasksList categoryFilter={categoryFilter} />
    </HomepageContentContainer>
}

export default HomepageContent;