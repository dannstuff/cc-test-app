import React from "react";
import {InvestmentsHeaderContainer, DisclaimerContainer, Disclaimerlink} from "./assets/styles";
import InvestmentSort from "./lib/InvestmentSort";

function InvestmentsHeader(){
    return (
        <InvestmentsHeaderContainer>
           <InvestmentSort />
            <DisclaimerContainer>
                <div>
                    Capital at Risk. Please read our 
                    <Disclaimerlink> risk warning </Disclaimerlink>
                    and
                    <Disclaimerlink> disclaimer </Disclaimerlink>
                </div>
            </DisclaimerContainer>
        </InvestmentsHeaderContainer>
    )
}


export default InvestmentsHeader;