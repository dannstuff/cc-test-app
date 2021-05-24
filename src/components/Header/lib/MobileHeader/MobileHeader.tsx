import React from "react";
import { MobileHeaderContainer, MobileHeaderContent, MobileNav, Logo, Spacer, Login, NavContainer} from "./assets/styles";

function MobileHeader(){
    return (
        <MobileHeaderContainer>
            <MobileNav>
                <NavContainer>
                    <MobileHeaderContent>
                        <Spacer />
                        <Logo src={"https://www.crowdcube.com/dist/assets/img/crowdcube-logo.svg"}/>
                        <Login>Log in</Login>
                    </MobileHeaderContent>
                </NavContainer>
            </MobileNav>
        </MobileHeaderContainer>
    );
}


export default MobileHeader;