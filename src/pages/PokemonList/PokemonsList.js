import React, { useEffect, useState } from 'react';

//import components
import PokemonMainImage from '../../components/PokemonMainImage/PokemonMainImage';

//import services
import { getPokemonsList, getPokemonDetails } from '../../services/pokemonService';

//import styles
import { Wrapper, LogoContainer } from './PokemonList.styles';

const PokemonsList = () => {

    const [pokemonGralInfo, setpokemonGralInfo] = useState([])
    const [pokemonImage, setPokemonImage] = useState([])
    const [offset, set0ffset] = useState(0)

    useEffect(() => {
        setPokemonImage([])
        setpokemonGralInfo([])

        const getPokemons = async () => {
            const { data: { results } } = await getPokemonsList();
            setpokemonGralInfo(results);
            results.map(async el => {
                const data = await getPokemonImage(el.url.slice(34, el.url.length - 1))
                setPokemonImage(pokemonImage => [...pokemonImage, data])
            })
        }
        getPokemons()
    }, [])


    const handleNextPage = async () => {
        setPokemonImage([])
        setpokemonGralInfo([])
        const lastIDPokemon = pokemonGralInfo[4].url.slice(34, pokemonGralInfo[4].url.length - 1)
        const { data: { results } } = await getPokemonsList(lastIDPokemon);
        setpokemonGralInfo(results);
        set0ffset(lastIDPokemon)
        results.map(async el => {
            const data = await getPokemonImage(el.url.slice(34, el.url.length - 1))
            setPokemonImage(pokemonImage => [...pokemonImage, data])
        })
    }

    const handlePrevPage = async () => {
        setPokemonImage([])
        setpokemonGralInfo([])
        const lastIDPokemon = pokemonGralInfo[4].url.slice(34, pokemonGralInfo[4].url.length - 1)
        const { data: { results } } = await getPokemonsList(lastIDPokemon - 10);
        setpokemonGralInfo(results);
        set0ffset(lastIDPokemon - 10);
        results.map(async el => {
            const data = await getPokemonImage(el.url.slice(34, el.url.length - 1))
            setPokemonImage(pokemonImage => [...pokemonImage, data])
        })
    }

    const getPokemonImage = async (id) => {
        const data = await getPokemonDetails(id)
        return data;
    }

    return (
        <Wrapper>
            <LogoContainer />
            <div className='imageContainer'>
                {pokemonImage.map(el => (
                    <PokemonMainImage img={el.data.sprites.front_default} id={el.data.id} />
                ))}
            </div>
            <div className='buttonsContainer'>
                {offset < 5 ? '' : (
                    <button className='buttonStyles' onClick={handlePrevPage}>PREV</button>
                )}
                <button className='buttonStyles' onClick={handleNextPage}>NEXT</button>
            </div>
        </Wrapper>
    )
}

export default PokemonsList;
