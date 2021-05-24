import Styled from "styled-components";



export const HeaderContainer = Styled.div`
    position: sticky;
    top: 0;
    z-index: 1001;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
`;


export const HeaderNav = Styled.nav`
    margin: 0 auto;
    max-width: 75rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-height: 87px;
    height: 87px;
`;


export const NavContainer = Styled.div`
    display: flex;
    position: sticky;
    z-index: 1001;
    place-content: center space-between;
    height: 99px;
    -webkit-box-pack: justify;
    width: 100%;
`;