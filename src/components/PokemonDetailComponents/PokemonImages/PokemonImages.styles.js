import styled from 'styled-components';

export const ImagesContainer = styled.div `
    display; flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (min-width: 320px){
        width: 60vw;
    }
    @media only screen and (min-width: 768px){
        width: 25vw;
    }
    @media only screen and (min-width: 1024px){
        width: 20vw;
    }
    @media only screen and (min-width: 1440px){
        width: 10vw;
    }
`

export const Image = styled.div `
    height: auto;
    width 100%;
`