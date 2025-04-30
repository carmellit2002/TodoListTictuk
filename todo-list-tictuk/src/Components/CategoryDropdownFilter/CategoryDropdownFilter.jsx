import React from "react";
import { FilterSelector, SelectorOption, SelectableCategoryIcon, SelectableText } from "./styles";
import { createOptionElements } from "./utils";
import { categoryToImage } from "../Task/categoryToImage";

const CategoryDropdownFilter = ({ onCategorySelect }) => {
    const optionElements = createOptionElements(categoryToImage);

    return <FilterSelector
        placeholder={"Filter"}
        options={optionElements}
        onChange={(option) => onCategorySelect(option.value)}
        formatOptionLabel={({ value, label }) => {
            console.log(value, label);
            return <SelectorOption>
                <SelectableCategoryIcon src={categoryToImage[value]} />
                <SelectableText> {label} </SelectableText>
            </SelectorOption>
        }}
    />
}

export default CategoryDropdownFilter;