import React from "react";
import { FilterSelector, SelectorOption, SelectableCategoryIcon, SelectableText } from "./styles";
import { categoryToImage } from "../Task/categoryToImage";

const CategoryDropdownFilter = ({ onCategorySelect }) => {

    const createOptionElements = () => {
        return Object.keys(categoryToImage).map((category) =>
            ({
                value: category,
                label: category
            })
        )
    }
    const optionElements = createOptionElements();

    return <FilterSelector
        placeholder={"Filter"}
        options={optionElements}
        onChange={(value) => onCategorySelect(value)}
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