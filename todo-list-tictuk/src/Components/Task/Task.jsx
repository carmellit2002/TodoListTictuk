import React from "react";
import { TaskContainer, TaskDetailsContainer, Title, Category, CompletionStatus, EditTaskButton, DeleteTaskButton } from "./styles";

const Task = ({ title, category, completionStatus }) => {
    return <TaskContainer>
        <TaskDetailsContainer>
            <Title> {title} </Title>
            <Category> {category} </Category>
            <CompletionStatus> {completionStatus ? "COMPLETED" : "INCOMPLETE"} </CompletionStatus>
        </TaskDetailsContainer>
        <EditTaskButton />
        <DeleteTaskButton />
    </TaskContainer>
}

export default Task;