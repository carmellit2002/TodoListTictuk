import styled from "styled-components";

export const TaskContainer = styled.div`
    height: 8%;
    width: 30%;

    display: flex;
    align-items: center;
`;

export const TaskDetailsContainer = styled.div`
    height: 60%;
    width: 80%;

    display: flex;
    align-items: center;

    border-radius: 12px;
    gap: 12px;
    padding: 8px 12px 8px 12px;

    box-shadow: 0px 1px 6px 0px #0000001F;
`;

export const TextDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 12px;
`;

export const Category = styled.div`
    font-size: 14px;
`;

export const CategoryIcon = styled.img`
    height: 40px;
    width: 40px;
`;

export const CompletionStatus = styled.img`
    height: 24px;
    width: 24px;

    cursor: pointer;
`;

export const TaskActionsContainer = styled.div`
    height: 100%;
    width: 20%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    padding: 8px 12px 8px 12px;
`;

export const EditTaskButton = styled.input`
    height: 24px;
    width: 24px;
`;

export const DeleteTaskButton = styled.input`
    height: 24px;
    width: 24px;
`;