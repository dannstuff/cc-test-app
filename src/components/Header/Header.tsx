import React, { useContext } from "react";
import { HeaderContainer, HeaderNav, NavContainer} from "./assets/styles";
import LeftNav from "./lib/LeftNav";
import RightNav from "./lib/RightNav";
import {MediaContext} from "react-media-query-hoc";
import { MediaContextType } from "../../types/MediaContextType";
import MobileHeader from "./lib/MobileHeader";


function Header(){

    const media = useContext<MediaContextType>(MediaContext);

    return (
        <>
            {!media.mobile ? (
                <HeaderContainer>
                    <HeaderNav>
                        <NavContainer>
                            <LeftNav />
                            <RightNav />
                        </NavContainer>
                    </HeaderNav>
                </HeaderContainer>
            ) : (
                <MobileHeader />
            )}
        </>
    )
}

export default Header;