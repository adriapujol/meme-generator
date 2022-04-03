import React, { useState } from 'react';
import './Controls.scss';

function Controls({ imgUrl, fontType, fontColor, fontSize, topText, bottomText, setImgUrl, setFontType, setFontColor, setFontSize, setTopText, setBottomText }) {

    const [tempUrl, setTempUrl] = useState("");

    const handleTempUrl = e => {
        e.preventDefault();
        setTempUrl(e.target.value);
    }

    const handleImgUrl = () => {
        setImgUrl(tempUrl);
    }
    const handleType = font => {
        setFontType(font);
    }
    const handleColor = e => {
        setFontColor(e.target.value);
    }
    const handleSize = (action, count) => {
        let total = parseFloat(count);
        if (action === "+") {
            if (total < 4) {
                total += 0.5;
            }
        }
        if (action === "-") {
            if (total > 1) {
                total -= 0.5;
            }
        }
        setFontSize(total.toString());
    }
    const handleTopText = e => {
        e.preventDefault();
        setTopText(e.target.value);
    }
    const handleBottomText = e => {
        e.preventDefault();
        setBottomText(e.target.value);
    }
    const handleClearText = position => {
        if (position === "top") setTopText("");
        if (position === "bottom") setBottomText("");
    }


    return (
        <div className='controls'>

            <div className="block">
                <div className="input-box">
                    <input type='text' id='img-url' name='img-url' placeholder='enter image url' value={tempUrl} onChange={handleTempUrl} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt' onClick={handleImgUrl}>upload</button>
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='top-text' name='top-text' placeholder='funny top text here' maxLength={140} value={topText} onChange={handleTopText} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt' onClick={() => handleClearText("top")}>X</button>
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='bottom-text' name='bottom-text' placeholder='funny bottom text here' maxLength={140} value={bottomText} onChange={handleBottomText} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt' onClick={() => handleClearText("bottom")}>X</button>
            </div>
            <div className="block">
                <label htmlFor='font'>font:</label>
                <div>
                    <button className={fontType === "comicsans" ? "active" : ""} onClick={() => { handleType("comicsans") }}>comic sans</button>
                    <button className={fontType === "arial" ? "active" : ""} onClick={() => { handleType("arial") }}>arial</button>
                    <button className={fontType === "pacifico" ? "active" : ""} onClick={() => { handleType("pacifico") }}>pacifico</button>
                </div>
            </div>
            <div className="block">
                <label htmlFor='color'>color:</label>
                <input type='color' value={fontColor} onChange={handleColor} />
            </div>
            <div className="block">
                <label htmlFor="font-size">font size:</label>
                <div className="size-control">
                    <button onClick={() => handleSize("-", fontSize)}>-</button>
                    <span>{fontSize}</span>
                    <button onClick={() => handleSize("+", fontSize)}>+</button>
                </div>
            </div>


            <button className='main-btn'>download</button>
        </div >
    )
}

export default Controls