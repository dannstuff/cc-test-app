import React from "react";
import {PageHeaderContainer, ContentContainer, PageHeaderNav, NavItem, NavAnchor} from "./assets/styles";


function PageHeader(){
    return (
            <PageHeaderContainer>
                <ContentContainer>
                    <PageHeaderNav>
                        <NavItem>
                            <NavAnchor>Live Opportunities</NavAnchor>
                        </NavItem>
                    </PageHeaderNav>
                </ContentContainer>
            </PageHeaderContainer>
    );
};


export default PageHeader;