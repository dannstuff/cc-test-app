import React from "react";
import { LayoutProps } from "./types";
import {Main} from "./assets/styles";
import Header from "../../../../components/Header";
import FilterBar from "../../../../components/FilterBar";
import PageHeader from "../../../../components/PageHeader";



function Layout(props: LayoutProps){

    const {children} = props;

    return (
        <Main>
            <Header />
            <FilterBar />
            <PageHeader />
            {children}
        </Main>
    )
}


export default Layout;