import React from 'react';
import { useHistory } from 'react-router-dom';

//import styles
import { NameContainer } from './PokemonMainInfo.styles';

const PokemonMainInfo = ({ name, id }) => {

    const history = useHistory();

    const pushToDetail = (id) => {
        history.push(`/pokemonDetail/${id}`)
    }

    return (
        <NameContainer onClick={() => pushToDetail(id)}>
            <p>{name}</p>
        </NameContainer>
    )
}

export default PokemonMainInfo
