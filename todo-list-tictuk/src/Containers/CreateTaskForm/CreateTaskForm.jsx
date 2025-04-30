import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocation } from "react-router";
import Back from "../../Assets/Back.png";
import Complete from "../../Assets/Complete.png";
import Incomplete from "../../Assets/Incomplete.png";
import { FormContainer, BackButton, BackIcon, BackText, FormTitle, TitleInput, CompletionStatusSection, CompletionStatusText, CreateTaskButton } from "./styles";
import CategoryDropdownFilter from "../../Components/CategoryDropdownFilter"; // should probably change the name of this if I have time.
import { CompletionStatus } from "../../Components/Task/styles";

const CreateTaskForm = () => {
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [completionStatus, setCompletionStatus] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isRedirectedByEdit = location.state;
        if (isRedirectedByEdit) {
            setIsEditing(true);
            setTitle(isRedirectedByEdit.title);
            setCategory(isRedirectedByEdit.category)
            setCompletionStatus(isRedirectedByEdit.completionStatus)
        }
    }, []);

    const onSaveClick = () => {
        const newTask = {
            id: isEditing ? location.state.id : uuid(),
            title: title,
            category: category,
            completionStatus: completionStatus
        }
        const existingTasks = JSON.parse(localStorage.getItem('tasks'));
        localStorage.setItem('tasks', JSON.stringify(existingTasks ? [...existingTasks, newTask] : [newTask]))
    }

    const onEditClick = () => {
        const id = isEditing ? location.state.id : uuid();
        const editedTask = {
            id: id,
            title: title,
            category: category,
            completionStatus: completionStatus
        }

        const existingTasks = JSON.parse(localStorage.getItem('tasks'));
        const editedTaskIndex = existingTasks.findIndex(task => task.id === id);
        existingTasks[editedTaskIndex] = editedTask;
        
        localStorage.setItem('tasks', JSON.stringify(existingTasks))
    }

    return <FormContainer>
        <BackButton to="/">
            <BackIcon src={Back}/>
            <BackText> Back </BackText>
        </BackButton>

        <FormTitle> Create New Task </FormTitle>

        <CategoryDropdownFilter
            placeholder={"Select category"}
            onCategorySelect={setCategory}
            defaultCategory={category}
        />
        <TitleInput
            placeholder="Name your task"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <CompletionStatusSection>
            <CompletionStatusText> Is the task complete? </CompletionStatusText>
            <CompletionStatus src={completionStatus ? Complete : Incomplete} onClick={() => setCompletionStatus(!completionStatus)} />
        </CompletionStatusSection>

        <CreateTaskButton onClick={isEditing ? onEditClick : onSaveClick}> { isEditing ? "Save changes" : "Save new task" } </CreateTaskButton>
    </FormContainer>
}

export default CreateTaskForm;