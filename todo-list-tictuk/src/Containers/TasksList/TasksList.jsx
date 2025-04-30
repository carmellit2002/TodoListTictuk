import React, { useState, useEffect } from "react";
import { TasksListContainer } from "./styles";
import Task from "../../Components/Task";

const tempTasks = [
    {
        id: "randomGeneratedID",
        title: "This is a test title",
        category: "Shop",
        completionStatus: false,
    },
    {
        id: "randomGeneratedID2",
        title: "Test no. 2",
        category: "Shop",
        completionStatus: true,
    },
    {
        id: "randomGeneratedID3",
        title: "Pets test!",
        category: "Pets",
        completionStatus: false,
    }
]

const TasksList = ({ categoryFilter }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from Local Storage or something.
        setTasks(tempTasks);
    }, [])

    const onStatusClick = (randomGeneratedID) => {
        const updatedTasks = [...tasks];
        const foundTaskIndex = updatedTasks.findIndex(task => task.id === randomGeneratedID);
        updatedTasks[foundTaskIndex].completionStatus = !updatedTasks[foundTaskIndex].completionStatus;
        
        setTasks(updatedTasks);
    }

    return <TasksListContainer>
        {tasks.map((task) => 
            (!categoryFilter || categoryFilter === task.category) && <Task 
                id={task.id}
                title={task.title}
                category={task.category}
                completionStatus={task.completionStatus}
                onStatusClick={onStatusClick}
            />)
        }
    </TasksListContainer>
}

export default TasksList;