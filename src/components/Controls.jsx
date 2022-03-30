import React from 'react';
import './Controls.scss';

function controls() {
    return (
        <div className='controls'>

            <div className="block">
                <div className="input-box">
                    <input type='text' id='img-url' name='img-url' placeholder='enter image url' />
                    <span className='underline'></span>
                </div>
                <button>upload</button>
            </div>
            <div className="block">

                <div className="input-box">
                    <input type='text' id='top-text' name='top-text' placeholder='funny top text here' />
                    <span className='underline'></span>
                </div>
                <button>clear</button>
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='bottom-text' name='bottom-text' placeholder='funny bottom text here' />
                    <span className='underline'></span>
                </div>
                <button>clear</button>
            </div>
            <div className="block">
                <label htmlFor='font'>font:</label>
                <div>Select font</div>
            </div>
            <div className="bloc">
                <label htmlFor='color'>color:</label>
                <input type='color' value='#ffffff' />
            </div>
            <div className="bloc">
                <label htmlFor="font-size">font size:</label>
                <button>-</button>
                <button>+</button>
            </div>


            <button>download</button>
        </div>
    )
}

export default controls