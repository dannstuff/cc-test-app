import React from "react";
import { HeaderContainer, HeaderBackground, LogoImageContainer, LogoImage, BackgroundImageContainer } from "./assets/styles";
import { Props } from "./types";


function InvestmentCardHeader(props: Props){
    const { images } = props;

    const logo = images[0];
    const coverImage = images[1];

    console.log(logo.src)
    

    return (
        <HeaderContainer>
            <BackgroundImageContainer>
                <HeaderBackground url={coverImage.src}/>
            </BackgroundImageContainer>
            <LogoImageContainer>
                <LogoImage url={logo.src}/>
            </LogoImageContainer>
        </HeaderContainer>
    )
}

export default InvestmentCardHeader;