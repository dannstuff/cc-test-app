import Styled from "styled-components";


export const CardContainer = Styled.div`
    display: flex;
    height: 583px;
    width: 386px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 32px;

    &:hover {
        box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px;
    }
`