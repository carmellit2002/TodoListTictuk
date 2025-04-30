import styled from "styled-components";
import Select from "react-select";

export const FilterSelector = styled(Select)`
    
`;

export const SelectorOption = styled.div`
    display: flex;
    align-items: center;

    gap: 12px;
`;

export const SelectableCategoryIcon = styled.img`
    height: 20px;
    width: 20px;
`;

export const SelectableText = styled.div`
    font-size: 16px;
`;