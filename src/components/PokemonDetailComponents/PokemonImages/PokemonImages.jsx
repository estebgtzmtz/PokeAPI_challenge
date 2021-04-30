import React, { useState } from 'react';

//import styles 
import { ImagesContainer, Image } from './PokemonImages.styles'

const PokemonImages = ({ imgs }) => {

    const [images] = useState(Object.values(imgs))
    Object.values(imgs)


    return (
        <ImagesContainer>
            <Image>
                {images.slice(0, images.length - 2).filter(el => el !== null).reverse().map(el => (
                    <img src={el} alt={el} />
                ))}
            </Image>
        </ImagesContainer>
    )
}

export default PokemonImages
