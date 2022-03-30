import React from 'react';
import './Controls.scss';

function controls() {
    return (
        <div>
            <input type='text' id='img-url' name='img-url' placeholder='enter image url' />
            <button>upload</button>

            <input type='text' id='top-text' name='top-text' placeholder='funny top text here' />
            <button>clear</button>
            <input type='text' id='bottom-text' name='bottom-text' placeholder='funny bottom text here' />
            <button>clear</button>

            <label htmlFor='font'>font:</label>
            <div>Select font</div>

            <label htmlFor='color'>color:</label>
            <input type='color' value='#000' />

            <label htmlFor="font-size">font size:</label>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

export default controls