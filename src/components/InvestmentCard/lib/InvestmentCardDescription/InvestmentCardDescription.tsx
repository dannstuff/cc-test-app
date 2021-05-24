import React from "react";
import { DescriptionContainer, InvestmentName, InvestmentDescription} from "./assets/styles";
import { Props } from "./types";


function InvestmentCardDescription(props: Props){
    const {name, description} = props;
    return (
        <DescriptionContainer>
            <InvestmentName>{name}</InvestmentName>
            <InvestmentDescription>{description}</InvestmentDescription>
        </DescriptionContainer>
    )
}

export default InvestmentCardDescription;