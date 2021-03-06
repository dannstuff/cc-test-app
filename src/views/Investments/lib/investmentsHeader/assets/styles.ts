import Styled from "styled-components";
import {screen} from "../../../../../utils/devices";


export const InvestmentsHeaderContainer = Styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    margin: 24px auto;
    max-width: calc(1224px);
    padding: 0px 24px;

    @media ${screen.web}{
        width: 1176px;
    }
    
    @media ${screen.mobile}{
        flex-direction: column-reverse;
        padding-right: 24px;
    }
`;


export const DisclaimerContainer = Styled.div`
    border: 1px solid rgb(228, 228, 228);
    border-radius: 2px;
    font-size: 14px;
    padding: 8px;
`;

export const Disclaimerlink = Styled.a`
    color: rgb(255, 81, 0);
    text-decoration: none;
`;
