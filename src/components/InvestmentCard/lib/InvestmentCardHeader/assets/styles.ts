import Styled from "styled-components";


export const HeaderContainer = Styled.div.attrs({
    className: "investment-header-container"
})`
    position: relative;
    margin-bottom: 32px;
`;

type HeaderImageProps = {
    url: string
}


export const BackgroundImageContainer = Styled.div`
    height: 168px;
`

export const HeaderBackground = Styled.div.attrs({
    className: "header-background-image"
})<HeaderImageProps>`
    -webkit-box-align: center;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    background-size: cover;
    background-image:${(props) => `url(${props.url})`};
    display: flex;
    width: 100%;
    height: inherit;
    transition: filter 75ms ease-in-out 0s;
    filter: blur(0px);
`;



export const LogoImageContainer = Styled.div.attrs({
    className: "investment-header-logo-container"
})`
    border: 1px solid rgb(204, 204, 204);
    position: absolute;
    height: 100px;
    left: 8px;
    top: 100px;
    width: 100px;
    z-index: 1;
`;



export const LogoImage = Styled.div.attrs({
    className: "investment-header-logo-image"
})<HeaderImageProps>`
    -webkit-box-align: center;
    align-items: center;
    border-radius: inherit;
    background-image:${(props) => `url(${props.url})`};
    background-size: cover;
    display: flex;
    width: 100%;
    height: 100%;
    transition: filter 75ms ease-in-out 0s;
    filter: blur(0px);
`