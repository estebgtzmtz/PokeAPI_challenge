import React, { useEffect, useState } from 'react';

//import services
import { getAbilities } from '../../../services/pokemonService';

//import styles
import { AbilitiesContainer } from './PokemonAbilities.styles';

const PokemonAbilities = ({ ability }) => {

    const [firstLanguage, setFirstLanguage] = useState('')
    const [secondLanguage, setSecondLanguage] = useState('')
    const [language, setLanguage] = useState(true)

    useEffect(() => {
        setLanguage(true)
        const getAbility = async () => {
            const { data } = await getAbilities(ability.url.slice(34, ability.url.length - 1))
            setFirstLanguage(data.effect_entries[0].effect)
            setSecondLanguage(data.effect_entries[1].effect)
        }
        getAbility();
    }, [ability.url])

    const handleChangeLanguage = () => {
        setLanguage(!language)
    }

    return (
        <AbilitiesContainer>
            <h1>{ability.name}</h1>
            {language ?
                <p>{firstLanguage}</p> :
                <p>{secondLanguage}</p>
            }
            <button onClick={handleChangeLanguage}>
                Change Language
            </button>
        </AbilitiesContainer>
    )
}

export default PokemonAbilities
