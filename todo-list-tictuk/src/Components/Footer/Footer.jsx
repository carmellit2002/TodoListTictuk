import React from "react";
import { useLocation } from "react-router";
import { FooterContainer } from "./styles";
import NewTaskButton from "../NewTaskButton";

const Footer = () => {
    const location = useLocation();
    const isInHomepage = location.pathname === "/";

    return <FooterContainer>
        { isInHomepage && <NewTaskButton /> }
    </FooterContainer>
}

export default Footer;