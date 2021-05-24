import React from "react";
import { FooterContainer, TargetContainer, Target, DaysLeft, InvestmentMetaDataContainer, MetaDataField, Divider, MetaValue, ProgressContainer, ProgressBar } from "./assets/styles";
import { Props } from "./types";
import {calculateDays, formatCurrency} from "./utils";


function InvestmentCardFooter(props: Props){
    const {investmentDetails : {target, current, percentage}, expiryDate, equity} = props;
    const daysLeft = calculateDays(expiryDate);
    const daysText = daysLeft === 1 ? "day left" : "days left";

    const investors = Math.floor(Math.random() * 1000);

    return (
        <FooterContainer>
            <TargetContainer>
                 <Target>{`£${formatCurrency(target[0])} Target`}</Target>
                <DaysLeft>{`${daysLeft} ${daysText}`}</DaysLeft>
            </TargetContainer>
            <ProgressContainer>
                 <ProgressBar progress={percentage}>{`${percentage}%`}</ProgressBar>
            </ProgressContainer>
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
                     <MetaValue>{investors}</MetaValue>
                     {"Investors"}
                </MetaDataField>
            </InvestmentMetaDataContainer>
        </FooterContainer>
    )
}

export default InvestmentCardFooter;