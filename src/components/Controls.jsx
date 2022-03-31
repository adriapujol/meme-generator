import React from 'react';
import './Controls.scss';

function Controls({ imgUrl, fontType, fontColor, fontSize, topText, bottomText, setImgUrl, setFontType, setFontColor, setFontSize, setTopText, setBottomText }) {

    const handleImgUrl = e => {
        e.preventDefault();
        setImgUrl(e.taget.value);
    }
    const handleType = font => {
        setFontType(font);
    }
    const handleColor = e => {
        setFontColor(e.target.value);
    }
    const handleSize = e => {
        e.preventDefault();
        setFontSize(e.target.value);
    }
    const handleTopText = e => {
        e.preventDefault();
        setTopText(e.target.value);
    }
    const handleBottomText = e => {
        e.preventDefault();
        setBottomText(e.target.value);
    }


    return (
        <div className='controls'>

            <div className="block">
                <div className="input-box">
                    <input type='text' id='img-url' name='img-url' placeholder='enter image url' value={imgUrl} onChange={handleImgUrl} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt' onClick={handleImgUrl}>upload</button>
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='top-text' name='top-text' placeholder='funny top text here' value={topText} onChange={handleTopText} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt' >X</button>
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='bottom-text' name='bottom-text' placeholder='funny bottom text here' value={bottomText} onChange={handleBottomText} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt'>X</button>
            </div>
            <div className="block">
                <label htmlFor='font'>font:</label>
                <div>
                    <button onClick={() => { handleType("comicsans") }}>comic sans</button>
                    <button onClick={() => { handleType("arial") }}>arial</button>
                    <button onClick={() => { handleType("pacifico") }}>pacifico</button>
                </div>
            </div>
            <div className="block">
                <label htmlFor='color'>color:</label>
                <input type='color' value={fontColor} onChange={handleColor} />
            </div>
            <div className="block">
                <label htmlFor="font-size">font size:</label>
                <button>-</button>
                <span>{fontSize}</span>
                <button>+</button>
            </div>


            <button>download</button>
        </div>
    )
}

export default Controls