import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewTaskClickable = styled(Link)`
    height: 35%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 12px 8px 12px;
    gap: 8px;

    border: none;
    border-radius: 8px;
    background-color: #5F33E1;

    cursor: pointer;

    text-decoration: none;
`;

export const ButtonText = styled.div`
    margin-top: 1px;

    font-size: 16px;
    color: #FFFFFF;

`;