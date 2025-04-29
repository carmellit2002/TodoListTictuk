import React from "react";
import Task from "../../Components/Task";

const TasksList = ({ tasks = [] }) => {
    return <Task
        title={"This is a test title"}
        category={"Shopping"}
        completionStatus={false}
    />
}

export default TasksList;