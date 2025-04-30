import React, { useState, useEffect } from "react";
import { TasksListContainer } from "./styles";
import Task from "../../Components/Task";

const TasksList = ({ categoryFilter }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const localStorageTasks = localStorage.getItem('tasks');
        setTasks(localStorageTasks ? JSON.parse(localStorageTasks) : []);
    }, [])

    const onStatusClick = (randomGeneratedID) => {
        const updatedTasks = [...tasks];
        const foundTaskIndex = updatedTasks.findIndex(task => task.id === randomGeneratedID);
        updatedTasks[foundTaskIndex].completionStatus = !updatedTasks[foundTaskIndex].completionStatus;
        
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    const onTaskEdit = (id) => {

    }

    const onTaskDelete = (id) => {
        const tasksExcludingGivenId = tasks.filter((task) => task.id !== id);
        setTasks(tasksExcludingGivenId);
        localStorage.setItem('tasks', JSON.stringify(tasksExcludingGivenId))
    }

    return <TasksListContainer>
        {tasks.map((task) => 
            (!categoryFilter || categoryFilter === task.category) && <Task 
                id={task.id}
                title={task.title}
                category={task.category}
                completionStatus={task.completionStatus}
                onStatusClick={onStatusClick}
                onTaskDelete={onTaskDelete}
            />)
        }
    </TasksListContainer>
}

export default TasksList;