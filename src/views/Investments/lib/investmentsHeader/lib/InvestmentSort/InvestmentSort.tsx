import React from "react";
import { InvestmentSortContainer, SelectButton } from "./assets/styles";


function InvestmentSort(){
    return (
        <InvestmentSortContainer>
            <SelectButton>
                <option>Most recent investment</option>
                <option>Newest</option>
                <option>Percentage raised</option>
                <option>Ammount raised</option>
            </SelectButton>
        </InvestmentSortContainer>
    )
}


export default InvestmentSort;