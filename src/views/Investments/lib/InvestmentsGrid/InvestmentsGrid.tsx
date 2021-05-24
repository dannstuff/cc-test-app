import React from "react";
import {GridContainer, GridContent, NoResults} from "./assets/styles";
import InvestmentCard from "../../../../components/InvestmentCard";
import { mockInvestmentItems} from "./utils";
import { InvestmentDTO } from "./types";


function InvestmentsGrid(){
    return (
        <GridContainer>
            {mockInvestmentItems.length > 0 ? (
                <GridContent>
                    {mockInvestmentItems.map((investment: InvestmentDTO) => {
                        return (
                            <InvestmentCard investmentItem={investment}/>
                        );
                    })}
                </GridContent>
            ) : (
                <NoResults>No Opportunities Available</NoResults>
            )}
        </GridContainer>
    )
}


export default InvestmentsGrid;