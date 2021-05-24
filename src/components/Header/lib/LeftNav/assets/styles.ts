import Styled from "styled-components";



export const LeftNavContainer = Styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`;

export const CrowdCubeLogo = Styled.img`
    width: 214px;
    margin-right: 24px;
`

export const ButtonContainer = Styled.div`
    margin: 0px;
    padding: 0px;
`;

export const ButtonSpacer = Styled.div`
    padding: 0px 16px;
`;

export const CustomerButton = Styled.button`
    background-color: transparent;
    border: 0px;
    display: inline-block;
    padding: 0px;
    color: rgb(3, 3, 82);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 300ms ease 0s, border-color 300ms ease 0s, color 300ms ease 0s;
`;