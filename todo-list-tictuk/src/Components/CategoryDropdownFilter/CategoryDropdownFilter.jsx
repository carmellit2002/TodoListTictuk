import React from "react";
import { FilterSelector, SelectorOption, SelectableCategoryIcon, SelectableText } from "./styles";
import { createOptionElements } from "./utils";
import { categoryToImage } from "../Task/categoryToImage";

const CategoryDropdownFilter = ({ placeholder, onCategorySelect }) => {
    const optionElements = createOptionElements(categoryToImage);

    return <FilterSelector
        placeholder={placeholder || "Filter"}
        options={optionElements}
        isClearable={true}
        onChange={(option) => onCategorySelect(option ? option.value : null)}
        formatOptionLabel={
            ({ value, label }) => <SelectorOption>
                <SelectableCategoryIcon src={categoryToImage[value]} />
                <SelectableText> {label} </SelectableText>
            </SelectorOption>
        }
    />
}

export default CategoryDropdownFilter;