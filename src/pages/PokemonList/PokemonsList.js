import React, { useEffect, useState } from 'react';

//import components
import PokemonMainImage from '../../components/PokemonMainImage/PokemonMainImage';
import PokemonMainInfo from '../../components/PokemonMainInfo/PokemonMainInfo';

//import services
import { getPokemonsList, getPokemonDetails } from '../../services/pokemonService';

//import styles
import { Wrapper } from './PokemonList.styles';

const PokemonsList = () => {

    const [pokemonGralInfo, setpokemonGralInfo] = useState([])
    const [pokemonImage, setPokemonImage] = useState([])

    useEffect(() => {
        if (pokemonImage.length > 6) {

        }
        setPokemonImage([])

        const getPokemons = async () => {
            const { data: { results } } = await getPokemonsList();
            setpokemonGralInfo(results);
            results.map(async el => {
                const data = await getPokemonImage(el.url.slice(34, el.url.length-1))
                setPokemonImage(pokemonImage => [...pokemonImage, data])
            })
        }
        getPokemons()
    }, [])

    const getPokemonImage = async (id) => {
        const data = await getPokemonDetails(id)
        return data;
    }

    console.log(pokemonGralInfo);

    return (
        <Wrapper>
            <div className='imageContainer'>
                {pokemonImage.map(el => (
                    <PokemonMainImage img={el.data.sprites.front_default} id={el.data.id} />
                ))}
            </div>
            <div className='nameContainer'>
                {pokemonGralInfo.map((el) => (
                    <PokemonMainInfo name={el.name} id={el.url.slice(34, el.url.length-1)}/>
                ))}
            </div>
        </Wrapper>
    )
}

export default PokemonsList;
