import React from "react";
import { InvestmentsContainer } from "./assets/styles";
import InvestmentsHeader from "./lib/investmentsHeader";
import InvestmentsGrid from "./lib/InvestmentsGrid";


function Investments(){
    return (
        <InvestmentsContainer>
            <InvestmentsHeader />
            <InvestmentsGrid />
        </InvestmentsContainer>
    )   
}


export default Investments;