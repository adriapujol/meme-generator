import React from 'react';
import './Image.scss';
import picture from '../img/buzz_woody.jpg';
import picture2 from '../img/interesting_men.jpg';

function Image() {
    return (
        <figure>
            <p className="meme-top-text"></p>
            <img src={picture} alt="to be memed" />
            <p className="meme-bottom-text"></p>
        </figure>
    )
}

export default Image