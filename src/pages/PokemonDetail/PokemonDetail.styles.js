import styled from 'styled-components';

export const PokemonDetailContainer = styled.div `
    height: 100vh;
    background-image: url("https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/sword-shield/pokemon-in-the-wild.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex-direction: column;
    img{
        height: auto;
        width:auto;
    }
    .goBack{
        color: white;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }    
`