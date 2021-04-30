import styled from 'styled-components';

export const AbilitiesContainer = styled.div `
    background-color: dodgerblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border-radius: 34px;
    justity-content: space-evenly;
    padding: 10px 20px;
    p{
        font-family: 'Arial';
        font-size: 20px;
        margin: 0;
        width: 100%;
    }
    button{
        padding: 10px 30px;
        font-family: 'Arial';
        border-radius: 90px;
        background-color: #FACC04;
        border: 5px solid #2774BA; 
        cursor: pointer;
    }
    button: hover{
        transition: margin-left 4s;
        background-color: #2774BA;
        border: 5px solid #FACC04; 
        color: white;
    }
`