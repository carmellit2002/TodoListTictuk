import styled from "styled-components";
import { Link } from "react-router";

export const FormContainer = styled.div`
    height: 65%;
    width: 30%;

    display: flex;
    flex-direction: column;
    align-content: center;

    margin-top: 50px;
`;

export const BackButton = styled(Link)`
    display: flex;
    align-items: center;

    gap: 8px;

    text-decoration: none;
    cursor: pointer;
`;

export const BackIcon = styled.img`

`;

export const BackText = styled.div`
    color: #000000;
    font-size: 14px;
`;

export const FormTitle = styled.div`
    margin: 40px 0px 20px 0px;
    font-weight: 600;
`;

export const TitleInput = styled.input`
    display: flex;
    justify-content: space-between;

    border: none;
    border-radius: 12px;

    padding: 12px;
    margin-top: 10px;

    box-shadow: 0px 1px 6px 0px #0000001F;
    outline: none;
`;

export const CompletionStatusSection = styled.div`
    margin-top: 10px;

    display: flex;
    align-items: center;
`;

export const CompletionStatusText = styled.div`
    margin-right: 10px;
`;

export const CreateTaskButton = styled.button`
    height: 7.5%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 12px 8px 12px;
    margin-top: 20px;

    border: none;
    border-radius: 8px;
    background-color: #5F33E1;

    font-size: 16px;
    color: #FFFFFF;
    
    cursor: pointer;
`;