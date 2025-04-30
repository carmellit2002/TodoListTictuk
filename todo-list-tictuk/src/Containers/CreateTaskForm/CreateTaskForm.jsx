import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Complete from "../../Assets/Complete.png";
import Incomplete from "../../Assets/Incomplete.png";
import { FormContainer, TitleInput, CompletionStatusSection, CompletionStatusText, CreateTaskButton } from "./styles";
import CategoryDropdownFilter from "../../Components/CategoryDropdownFilter"; // should probably change the name of this if I have time.
import { CompletionStatus } from "../../Components/Task/styles";

const CreateTaskForm = () => {
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [completionStatus, setCompletionStatus] = useState(false);

    const onSaveClick = () => {
        const newTask = {
            id: uuid(),
            title: title,
            category: category,
            completionStatus: completionStatus
        }
        const existingTasks = JSON.parse(localStorage.getItem('tasks'));
        localStorage.setItem('tasks', JSON.stringify(existingTasks ? [...existingTasks, newTask] : [newTask]))
    }

    return <FormContainer>
        <CategoryDropdownFilter
            placeholder={"Select category"}
            onCategorySelect={setCategory}
        />
        <TitleInput
            placeholder="Name your task"
            onChange={(e) => setTitle(e.target.value)}
        />
        <CompletionStatusSection>
            <CompletionStatusText> Is the task complete? </CompletionStatusText>
            <CompletionStatus src={completionStatus ? Complete : Incomplete} onClick={() => setCompletionStatus(!completionStatus)} />
        </CompletionStatusSection>
        <CreateTaskButton onClick={onSaveClick}> Save new task </CreateTaskButton>
    </FormContainer>
}

export default CreateTaskForm;