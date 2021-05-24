import Styled from "styled-components";

export const PageHeaderContainer = Styled.div`
    border-bottom: 1px solid rgb(228, 228, 228);
    border-top: 1px solid rgb(228, 228, 228);
    display: inline-block;
    min-width: 100%;
`;


export const ContentContainer = Styled.div`
    margin: 0px auto;
    max-width: calc(1222px);
    width: 100%;
`;


export const PageHeaderNav = Styled.ul`
    font-size: 14px;
    list-style: none;
    margin: 0px;
    padding: 16px 0px;
    white-space: pre;
`;


export const NavItem = Styled.li`
    display: inline-block;
    position: relative;
    white-space: pre;
    padding-left: 24px;
`


export const NavAnchor = Styled.a`
    border-bottom: 2px solid rgb(255, 81, 0);
    color: rgb(255, 81, 0);
    font-weight: bold;
    padding: 17px 0px;
    text-decoration: none;
`