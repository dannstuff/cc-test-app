import Styled from "styled-components";


export const RightNavContainer = Styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const OpportunitiesButton = Styled.button`
    -webkit-box-align: center;
    align-items: center;
    border-radius: 500px;
    box-sizing: border-box;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 40px;
    padding: 0px 2em;
    background-color: transparent;
    border: 2px solid rgb(3, 3, 82);
    color: rgb(3, 3, 82);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 300ms ease 0s, border-color 300ms ease 0s, color 300ms ease 0s;

    &:hover, &:focus {
        background-color: rgb(3, 3, 82);
        color: rgb(255, 255, 255);
    }
`



export const MemberContainer = Styled.div`
    margin-left: 48px;
`;


export const Login = Styled.a`
    color: unset;
    text-decoration: none;
    font-weight: bold;
    margin: 0px 12px;
    font-size: 16px;
`;


export const SignupButton = Styled.button`
    -webkit-box-align: center;
    align-items: center;
    border-radius: 500px;
    box-sizing: border-box;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 40px;
    padding: 0px 2em;
    background-color: rgb(255, 81, 0);
    border: 0px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 300ms ease 0s, border-color 300ms ease 0s, color 300ms ease 0s;
    margin-left: 12px;


    &:hover {
        background-color: rgb(221, 70, 0);
        color: rgb(255, 255, 255);
    }
`