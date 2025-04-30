import React from "react";
import { TaskContainer, TaskDetailsContainer, TextDetails, Title, Category, CategoryIcon, CompletionStatus, EditTaskButton, DeleteTaskButton, TaskActionsContainer } from "./styles";
import Complete from "../../Assets/Complete.png";
import Incomplete from "../../Assets/Incomplete.png";
import EditTaskIcon from "../../Assets/EditTask.png";
import DeleteTaskIcon from "../../Assets/DeleteTask.png";

import { categoryToImage } from "./categoryToImage";

const Task = ({ id, title, category, completionStatus, onStatusClick, onTaskEdit, onTaskDelete }) => {
    return <TaskContainer className="task">
        <TaskDetailsContainer>
            <CompletionStatus src={completionStatus ? Complete : Incomplete} onClick={() => onStatusClick(id)} />
            <CategoryIcon src={categoryToImage[category]} />
            <TextDetails>
                <Category> {category} </Category>
                <Title> {title} </Title>
            </TextDetails>
        </TaskDetailsContainer>
        <TaskActionsContainer>
            <EditTaskButton
                type="image"
                src={EditTaskIcon}
                onClick={() => onTaskEdit(id)}
            />
            <DeleteTaskButton
                type="image"
                src={DeleteTaskIcon}
                onClick={() => onTaskDelete(id)}
            />
        </TaskActionsContainer>
    </TaskContainer>
}

export default Task;