import React from "react";
import { TaskContainer, TaskDetailsContainer, TextDetails, Title, Category, CategoryIcon, CompletionStatus, EditTaskButton, DeleteTaskButton, TaskActionsContainer } from "./styles";
import Complete from "../../Assets/Complete.png";
import Incomplete from "../../Assets/Incomplete.png";
import EditTaskIcon from "../../Assets/EditTask.png";
import DeleteTaskIcon from "../../Assets/DeleteTask.png";

import { categoryToImage } from "./categoryToImage";

const Task = ({ title, category, completionStatus }) => {
    return <TaskContainer>
        <TaskDetailsContainer>
            <CompletionStatus src={completionStatus ? Complete : Incomplete} />
            <CategoryIcon src={categoryToImage[category]} />
            <TextDetails>
                <Category> {category} </Category>
                <Title> {title} </Title>
            </TextDetails>
        </TaskDetailsContainer>
        <TaskActionsContainer>
            <EditTaskButton type="image" src={EditTaskIcon}/>
            <DeleteTaskButton type="image" src={DeleteTaskIcon}/>
        </TaskActionsContainer>
    </TaskContainer>
}

export default Task;