import React from 'react'
import { MainImageContainer } from './PokemonMainImage.styles';
import { useHistory } from 'react-router-dom';


const PokemonMainImage = ({ img, id }) => {

    const history = useHistory();

    const pushToDetail = (id) => {
        history.push(`/pokemonDetail/${id}`)
    }

    return (
        <MainImageContainer onClick={() => pushToDetail(id)}>
            <img src={img} alt={img} />
        </MainImageContainer>
    )
}

export default PokemonMainImage;
