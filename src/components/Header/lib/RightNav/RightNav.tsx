import React from "react";
import {RightNavContainer, OpportunitiesButton, MemberContainer, Login, SignupButton} from "./assets/styles";


function RightNav(){
    return (
        <RightNavContainer>
            <OpportunitiesButton>
                Investment opportunities
            </OpportunitiesButton>
            <MemberContainer>
                <Login>Log In</Login>
                <SignupButton>Join</SignupButton>
            </MemberContainer>
        </RightNavContainer>
    );
}


export default RightNav;