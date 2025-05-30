import React from "react";
import AddNew from "../../Assets/AddNew.png";
import { NewTaskClickable, ButtonText } from "./styles";

const NewTaskButton = () => {
    return <NewTaskClickable to="/createTask">
        <img src={AddNew} />
        <ButtonText> New Task </ButtonText>
    </NewTaskClickable>
}

export default NewTaskButton;