import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

//import services
import { getPokemonDetails } from '../../services/pokemonService'

// import styles 
import { PokemonDetailContainer } from './PokemonDetail.styles'

//import components
import ImageName from '../../components/PokemonDetailComponents/PokemonImageAndName/ImageName';
import PokemonAbilities from '../../components/PokemonDetailComponents/PokemonAbilities/PokemonAbilities';
import PokemonImages from '../../components/PokemonDetailComponents/PokemonImages/PokemonImages';

const PokemonDetail = () => {

    const history = useHistory();
    const { id: pokemonID } = useParams();

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const getPokemon = async () => {
            const { data } = await getPokemonDetails(pokemonID);
            setPokemon(data)
        }
        getPokemon();
    }, [pokemonID])

    return (
        <PokemonDetailContainer>
            <div onClick={() => history.push('/')}>
                <img className='goBack' src="https://cdn2.iconfinder.com/data/icons/simple-circular-icons-line/84/Left_Arrow_-512.png" alt="https://cdn2.iconfinder.com/data/icons/simple-circular-icons-line/84/Left_Arrow_-512.png"/>
            </div>
            <div>
                {pokemon && pokemon.sprites && (
                    <ImageName img={pokemon.sprites.front_default} id={pokemon.id} name={pokemon.name} />
                )}
            </div>

            {pokemon && pokemon.abilities && (
                <PokemonAbilities ability={pokemon.abilities[0].ability} />
            )}

            <div>
                {pokemon && pokemon.sprites && (
                    <PokemonImages imgs={pokemon.sprites} />
                )}
            </div>
        </PokemonDetailContainer>
    )

}

export default PokemonDetail
