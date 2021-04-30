import styled from 'styled-components';

export const Wrapper = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    .imageContainer{
        background-color: blue;
        width: 70vw;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
    }
    .nameContainer{
        background-color: green;
        width: 70vw;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
    }
`