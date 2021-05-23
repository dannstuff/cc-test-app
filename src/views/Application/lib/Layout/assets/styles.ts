import Styled from "styled-components";


export const Main = Styled.main.attrs({
    className: "layout-page-container"
})`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
`;