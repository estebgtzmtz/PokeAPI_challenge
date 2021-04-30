import styled from 'styled-components';

export const Wrapper = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-evenly;
    background-image: url("https://i.pinimg.com/originals/a1/86/a8/a186a8aff83506c70b0b307e3fb062c8.png");
    backgrund-size: cover;
    background-repeat: no-repeat;
    .imageContainer{
        width: 70vw;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
        @media only screen and (min-width: 320px){
            flex-direction: column;
        }
        @media only screen and (min-width: 768px){
            flex-direction: row;
        }
    }

    .buttonsContainer{
        width: 20vw;
        display: flex;
        justify-content: space-evenly;
        .buttonStyles{
            padding: 10px 30px;
            font-family: 'Arial';
            border-radius: 90px;
            background-color: #FACC04;
            border: 5px solid #2774BA; 
            cursor: pointer;
        }
        .buttonStyles: hover{
            transition: margin-left 4s;
            background-color: #2774BA;
            border: 5px solid #FACC04; 
            color: white;
        }
    }
`

export const LogoContainer = styled.div `
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 67vw;
    @media only screen and (min-width: 320px){
        height: 10%;
    }
    @media only screen and (min-width: 768px){
        height: 20%;
    }
    @media only screen and (min-width: 1024px){
        height: 30%;
    }
    @media only screen and (min-width: 1440px){
        height: 50%;
    }
    `