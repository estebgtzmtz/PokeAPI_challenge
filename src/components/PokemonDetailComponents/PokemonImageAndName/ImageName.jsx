import React from 'react'

//import styles
import { ImageNameContainer } from './ImageAndName.styles'

const ImageName = ({ img, name, id }) => {

    return (
        <ImageNameContainer>
            <img src={img} alt={img} />
            <div>
                <p>{id} - {name}</p>
            </div>
        </ImageNameContainer>
    )
}

export default ImageName