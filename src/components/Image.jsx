import React from 'react';
import './Image.scss';
import picture from '../img/buzz_woody.jpg';

function Image() {
    return (
        <figure>
            <img src={picture} alt="picture to be memed" />
        </figure>
    )
}

export default Image