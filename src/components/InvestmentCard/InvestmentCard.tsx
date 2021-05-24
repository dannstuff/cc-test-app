import React from "react";
import {CardContainer} from "./assets/styles";
import {Props} from "./types";
import InvestmentCardHeader from "./lib/InvestmentCardHeader";
import InvestmentCardDescription from "./lib/InvestmentCardDescription";
import InvestmentCardFooter from "./lib/InvestmentCardFooter";


function InvestmentCard(props: Props){
    const { investmentItem: { name, images, description, investment, expires_at, equity } } = props;
    return (
        <CardContainer>
            <InvestmentCardHeader images={images}/>
            <InvestmentCardDescription name={name} description={description}/>
            <InvestmentCardFooter investmentDetails={investment} expiryDate={expires_at} equity={equity}/>
        </CardContainer>
    );
}


export default InvestmentCard;