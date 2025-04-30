import React, { useEffect } from "react";
import { CreateTaskPageContainer } from "./styles";
import Header from "../../Components/Header";
import CreateTaskForm from "../CreateTaskForm";
import Footer from "../../Components/Footer";

const CreateTaskPage = () => {
    useEffect(() => {
        console.log("User visited: CreateTaskPage");
    }, []);

    return <CreateTaskPageContainer>
        <Header />
        <CreateTaskForm />
        <Footer />
    </CreateTaskPageContainer>
}

export default CreateTaskPage;