import Styled from "styled-components";


export const FilterBarContainer = Styled.div`
    width: 100%;
`;


export const ContentContainer = Styled.div.attrs({
    className: "filter-content-container"
})`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin: 0px auto;
    max-width: 1200px;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const PageNameContainer = Styled.div`
    -webkit-box-pack: justify;
    justify-content: space-between;
`;


export const PageName = Styled.h2`
    flex: 1 1 0%;
    font-size: 18px;
    font-weight: 700;
    color: rgb(3, 3, 82);
    margin: 0px;
    padding: 12px;
`;


export const FilterSearchContainer = Styled.div`
    display: flex;
`;


export const FilterButtonContainer = Styled.div`
    position: relative;
    margin-right: 15px;
`;


export const FilterButton = Styled.button`
    background-color: rgb(255, 255, 255);
    -webkit-box-align: center;
    align-items: center;
    border-radius: 500px;
    box-sizing: border-box;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 40px;
    padding: 0px 2em;
    border: 0px;
    color: rgb(255, 81, 0);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 300ms ease 0s, border-color 300ms ease 0s, color 300ms ease 0s;

    &:hover {
        background-color: rgb(250, 250, 250);
    }
`;

export const SearchInputContainer = Styled.div`
    margin-left: 8px;
`; 


export const SearchInputContent = Styled.div`
    max-width: 360px;
    position: relative;
`

export const SearchInput = Styled.input`
    appearance: none;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(204, 204, 204);
    border-radius: 8px;
    box-shadow: none;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.75);
    display: block;
    font-size: 16px;
    height: calc(40px);
    line-height: 18px;
    padding: 10px;
    transition: box-shadow 0.2s ease 0s, border-color 0.2s ease-in-out 0s;
    max-width: 360px;
    width: 100%;
`;




