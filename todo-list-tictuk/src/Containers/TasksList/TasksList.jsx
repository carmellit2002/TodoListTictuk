import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { TasksListContainer } from "./styles";
import Task from "../../Components/Task";

const TasksList = ({ categoryFilter }) => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const localStorageTasks = localStorage.getItem('tasks');
        setTasks(localStorageTasks ? JSON.parse(localStorageTasks) : []);
    }, [])

    const onStatusClick = (id) => {
        const updatedTasks = [...tasks];
        const foundTaskIndex = updatedTasks.findIndex(task => task.id === id);
        updatedTasks[foundTaskIndex].completionStatus = !updatedTasks[foundTaskIndex].completionStatus;
        
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    const onTaskEdit = (id) => {
        const givenTask = tasks.find((task) => task.id === id);
        navigate("/createTask", { state: { ...givenTask } });
    }

    const onTaskDelete = (id) => {
        const tasksExcludingGivenId = tasks.filter((task) => task.id !== id);
        setTasks(tasksExcludingGivenId);
        localStorage.setItem('tasks', JSON.stringify(tasksExcludingGivenId))
    }

    console.log(tasks);
    return <TasksListContainer>
        {tasks.map((task) => 
            (!categoryFilter || categoryFilter === task.category) && <Task 
                id={task.id}
                title={task.title}
                category={task.category}
                completionStatus={task.completionStatus}
                onStatusClick={onStatusClick}
                onTaskEdit={onTaskEdit}
                onTaskDelete={onTaskDelete}
            />)
        }
    </TasksListContainer>
}

export default TasksList;