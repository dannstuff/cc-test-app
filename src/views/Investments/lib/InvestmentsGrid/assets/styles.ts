import Styled from "styled-components";
import {screen} from "../../../../../utils/devices";


export const GridContainer = Styled.div.attrs({
    className: "grid-container"
})`
    display: flex;
    flex: 1;
    margin: 0px 412px;

    @media ${screen.mobile}{
        margin: 0;
    }


`;


export const GridContent = Styled.div.attrs({
    className: "grid-content"
})`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 24px;
    flex-wrap: wrap;
    overflow-y: auto;
`