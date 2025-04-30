import React from "react";
import LogoIcon from "../../Assets/Logo.png";
import { HeaderContainer, Logo } from "./styles";

export const Header = () => {
    return <HeaderContainer>
        <Logo src={LogoIcon}/>
    </HeaderContainer>
}

export default Header;