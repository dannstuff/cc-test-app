import React from "react";
import { FooterContainer, TargetContainer, Target, DaysLeft, InvestmentMetaDataContainer, MetaDataField, Divider, MetaValue } from "./assets/styles";
import { Props } from "./types";
import {calculateDays, formatCurrency} from "./utils";


function InvestmentCardFooter(props: Props){
    const {investmentDetails : {target, current}, expiryDate, equity} = props;
    const daysLeft = calculateDays(expiryDate);
    const daysText = daysLeft === 1 ? "day left" : "days left";

    return (
        <FooterContainer>
            <TargetContainer>
                 <Target>{`£${formatCurrency(target[0])} Target`}</Target>
                <DaysLeft>{`${daysLeft} ${daysText}`}</DaysLeft>
            </TargetContainer>
            <InvestmentMetaDataContainer>
                <MetaDataField>
                     <MetaValue>{`£${formatCurrency(current[0])}`}</MetaValue>
                     {"Raised"}
                </MetaDataField>
                <Divider />
                <MetaDataField>
                     <MetaValue>{`${equity}%`}</MetaValue>
                     {"Equity"}
                </MetaDataField>
                <Divider />
                <MetaDataField>
                     <MetaValue>{`1167`}</MetaValue>
                     {"Investors"}
                </MetaDataField>
            </InvestmentMetaDataContainer>
        </FooterContainer>
    )
}

export default InvestmentCardFooter;