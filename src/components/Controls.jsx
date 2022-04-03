import React, { useState } from 'react';
import './Controls.scss';

function Controls({ fontType, fontColor, fontSize, topText, bottomText, setImgUrl, setFontType, setFontColor, setFontSize, setTopText, setBottomText }) {

    const [fileName, setFileName] = useState("");

    const handleFile = e => {
        e.preventDefault();
        const fileURL = URL.createObjectURL(e.target.files[0]);
        const tempFileName = e.target.files[0].name;
        setFileName(tempFileName);
        setImgUrl(fileURL);
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
                <label htmlFor="img-file" className='file-uplad'>
                    Upload File
                </label>
                <p>{fileName}</p>
                <input type='file' id='img-file' name='img-file' onChange={handleFile} />
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='top-text' name='top-text' autoComplete="off" placeholder='funny top text here' maxLength={140} value={topText} onChange={handleTopText} />
                    <span className='underline'></span>
                </div>
                <button className='btn-txt' onClick={() => handleClearText("top")}>X</button>
            </div>
            <div className="block">
                <div className="input-box">
                    <input type='text' id='bottom-text' name='bottom-text' autoComplete="off" placeholder='funny bottom text here' maxLength={140} value={bottomText} onChange={handleBottomText} />
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
        </div >
    )
}

export default Controls