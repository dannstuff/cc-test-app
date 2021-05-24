import Styled from "styled-components";

export const MobileHeaderContainer = Styled.div`
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
`;

export const MobileNav = Styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-height: 87px;
`;

export const NavContainer = Styled.nav`
    width: 100%;
`;


export const MobileHeaderContent= Styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 16px;

`;


export const Spacer = Styled.div`
    display: flex;
`


export const Logo = Styled.img`
    width: 170px;
`;



export const Login = Styled.a`
    color: unset;
    text-decoration: none;
    font-weight: bold;
`;