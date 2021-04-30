import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

//import services
import { getPokemonDetails } from '../../services/pokemonService'

// import styles 
import { PokemonDetailContainer } from './PokemonDetail.styles'

//import components
import ImageName from '../../components/PokemonDetailComponents/PokemonImageAndName/ImageName';
import PokemonAbilities from '../../components/PokemonDetailComponents/PokemonAbilities/PokemonAbilities';

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


    console.log('pokemon on detail', pokemon);

    return (
        <PokemonDetailContainer>
            <div onClick={() => history.push('/')} >
                atras
            </div>
            {pokemon && pokemon.sprites && (
                <ImageName img={pokemon.sprites.front_default} id={pokemon.id} name={pokemon.name} />
            )}
            {pokemon && pokemon.abilities && (
                <PokemonAbilities ability={pokemon.abilities[0].ability} />
            )}
        </PokemonDetailContainer>
    )

}

export default PokemonDetail
