import React from 'react';
import './Image.scss';
import picture from '../img/buzz_woody.jpg';
import picture2 from '../img/interesting_men.jpg';

function Image({ imgUrl, topText, bottomText, fontColor, fontSize, fontType }) {

    return (
        <figure>
            <p className={`meme-top-text .${fontType}`}>{topText}</p>
            <img src={picture} alt="to be memed" />
            <p className={`meme-bottom-text .${fontType}`}>{bottomText}</p>
        </figure>
    )
}

export default Image