import React from "react";
import { HeaderContainer, HeaderNav, NavContainer} from "./assets/styles";
import LeftNav from "./lib/LeftNav";
import RightNav from "./lib/RightNav";


function Header(){
    return (
        <HeaderContainer>
            <HeaderNav>
                <NavContainer>
                    <LeftNav />
                    <RightNav />
                </NavContainer>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;