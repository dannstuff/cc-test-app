import React from "react";
import {CrowdCubeLogo, ButtonContainer, ButtonSpacer, CustomerButton, LeftNavContainer} from "./assets/styles";


function LeftNav(){
    return (
        <LeftNavContainer>
            <CrowdCubeLogo src={"https://www.crowdcube.com/dist/assets/img/crowdcube-logo.svg"}/>
            <ButtonContainer>
                <ButtonSpacer>
                    <CustomerButton>Investors</CustomerButton>
                </ButtonSpacer>
            </ButtonContainer>
            <ButtonContainer>
                <ButtonSpacer>
                <CustomerButton>Businesses</CustomerButton>
                </ButtonSpacer>
            </ButtonContainer>
        </LeftNavContainer>
    );
}


export default LeftNav;