import Styled from "styled-components";


export const DescriptionContainer = Styled.div.attrs({
    className: "description-container"
})`
    flex: 1 1 0%;
    font-size: 20px;
    margin: 8px;
`;


export const InvestmentName = Styled.h2`
    font-size: 20px;
    color: rgb(3, 3, 82);
`


export const InvestmentDescription = Styled.div`
    color: rgb(116, 116, 116);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
`