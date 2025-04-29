import React from "react";

const Task = ({ title, category, completionStatus }) => {
    return <div>
        <div>
            {title}
            {category}
            {completionStatus}
        </div>
        {/* edit button */}
        {/* delete button */}
    </div>
}

export default Task;