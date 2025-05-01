import styled from "styled-components";

export const TasksListContainer = styled.div`
    height: 90%;
    width: 100%;

    display: flex;
    align-content: center;
    flex-direction: column;

    margin-top: 20px;
    
    .task:not(:last-child) {
        margin-bottom: 15px;
    }

    overflow-y: scroll;
`;