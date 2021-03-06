import Styled from "styled-components";


export const FooterContainer = Styled.div.attrs({
    className: "footer-container"
})`
    margin: 10px;
`;


export const TargetContainer = Styled.div.attrs({
    className: "target-container"
})`
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;


export const Target = Styled.h3`
    color: rgb(41, 56, 60);
    font-size: 16px;
`;


export const DaysLeft = Styled.div`
    color: rgb(3, 3, 82);
    font-size: 14px;
    font-weight: 700;
`


export const InvestmentMetaDataContainer = Styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 16px 24px;

    ::first-child {
        padding-left: 0px;
    }
`


export const MetaDataField = Styled.div`
    color: rgb(3, 3, 82);
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 0px 4px;
    text-align: center;
`


export const Divider = Styled.span`
    box-shadow: rgb(228, 228, 228) 1px 0px 0px 0px;
    height: 60px;
    width: 1px;
`;


export const MetaValue = Styled.span`
    font-weight: 700;
`


export const ProgressContainer = Styled.div.attrs({
    className: "progress-contauiner"
})`
    background-color: rgb(228, 228, 228);
    border-radius: 2px;
    height: 20px;
    overflow: hidden;
    width: 100%;
`;


type ProgressBarProps = {
    progress: number
};


export const ProgressBar = Styled.div.attrs({
    className: "progress-bar"
})<ProgressBarProps>`
    -webkit-box-align: center;
    align-items: center;
    border-radius: inherit;
    color: rgb(255, 255, 255);
    display: flex;
    font-weight: 800;
    height: 100%;
    padding-left: 4px;
    width: ${(props) => `${props.progress}%`};
    background: ${(props) => props.progress < 100 ? `rgb(3, 3, 82)` : `rgb(255, 81, 0)`};
`;


