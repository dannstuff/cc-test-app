import React from "react";
import {GridContainer, GridContent} from "./assets/styles";
import InvestmentCard from "../../../../components/InvestmentCard";
import {mockInvestment, mockInvestmentItems} from "./utils";
import { InvestmentDTO } from "./types";


function InvestmentsGrid(){
    return (
        <GridContainer>
            <GridContent>
                {mockInvestmentItems.map((investment: InvestmentDTO) => {
                    return (
                        <InvestmentCard investmentItem={investment}/>
                    );
                })}
            </GridContent>
        </GridContainer>
    )
}


export default InvestmentsGrid;