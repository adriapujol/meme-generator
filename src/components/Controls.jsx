import React from 'react';
import './Controls.scss';

function controls() {
    return (
        <div className='controls'>
            <input type='text' id='img-url' name='img-url' placeholder='enter image url' />
            <span className='underline'></span>
            <button>upload</button>

            <input type='text' id='top-text' name='top-text' placeholder='funny top text here' />
            <span className='underline'></span>
            <button>clear</button>
            <input type='text' id='bottom-text' name='bottom-text' placeholder='funny bottom text here' />
            <span className='underline'></span>
            <button>clear</button>

            <label htmlFor='font'>font:</label>
            <div>Select font</div>

            <label htmlFor='color'>color:</label>
            <input type='color' value='#ffffff' />

            <label htmlFor="font-size">font size:</label>
            <button>-</button>
            <button>+</button>

            <button>download</button>
        </div>
    )
}

export default controls