import React from "react";
import { LayoutProps } from "./types";
import {Main} from "./assets/styles";
import Header from "../../../../components/Header";
import FilterBar from "../../../../components/FilterBar";



function Layout(props: LayoutProps){

    const {children} = props;

    return (
        <Main>
            <Header />
            <FilterBar />
            {children}
        </Main>
    )
}


export default Layout;