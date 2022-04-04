import React, { useState } from 'react';
import TakePhoto from './TakePhoto';
import './Controls.scss';

function Controls({ fontType, fontColor, fontSize, topText, bottomText, setImgUrl, setFontType, setFontColor, setFontSize, setTopText, setBottomText }) {

    const [showCam, setShowCam] = useState(false);

    const handlePhoto = () => {
        setShowCam(true);
    }

    const handleFile = e => {
        e.preventDefault();
        const fileURL = URL.createObjectURL(e.target.files[0]);
        const tempFileName = e.target.files[0].name;
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
            {showCam && <TakePhoto setImgUrl={setImgUrl} setShowCam={setShowCam} />}
            <div className="block">
                <div className="input-box">
                    <label htmlFor="img-file" className='file-upload'>
                        upload file
                    </label>
                    <input type='file' id='img-file' name='img-file' onChange={handleFile} />
                </div>
                <div className="input-box">
                    <button className='file-upload' onClick={handlePhoto}>take photo</button>
                </div>
            </div>
            {/* <div className="block"> */}
            {/* </div> */}
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
                <label htmlFor='font' className='values-title'>font:</label>
                <div className='values-box'>
                    <button className={fontType === "comicsans" ? "font-type active" : "font-type"} onClick={() => { handleType("comicsans") }}>comic sans</button>
                    <button className={fontType === "arial" ? "font-type active" : "font-type"} onClick={() => { handleType("arial") }}>arial</button>
                    <button className={fontType === "pacifico" ? "font-type active" : "font-type"} onClick={() => { handleType("pacifico") }}>pacifico</button>
                </div>
            </div>
            <div className="block">
                <label htmlFor='color' className='values-title'>color:</label>
                <div className="values-box">
                    <input type='color' value={fontColor} onChange={handleColor} />
                </div>
            </div>
            <div className="block">
                <label htmlFor="font-size" className='values-title'>font size:</label>
                <div className="size-control values-box">
                    <button onClick={() => handleSize("-", fontSize)}>-</button>
                    <span>{fontSize}</span>
                    <button onClick={() => handleSize("+", fontSize)}>+</button>
                </div>
            </div>
        </div >
    )
}

export default Controls