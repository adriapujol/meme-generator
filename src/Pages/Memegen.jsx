import React from 'react';
import Controls from '../components/Controls';
import Image from '../components/Image';
import './Memegen.scss';

function Memegen() {
    return (
        <div className="meme-box">
            <Image />
            <Controls />
        </div>
    )
}

export default Memegen