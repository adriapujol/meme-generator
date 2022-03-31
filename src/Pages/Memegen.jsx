import React, { useState } from 'react';
import Controls from '../components/Controls';
import Image from '../components/Image';
import './Memegen.scss';

function Memegen() {

    const [imgUrl, setImgUrl] = useState("");
    const [fontType, setFontType] = useState("arial");
    const [fontColor, setFontColor] = useState("#ffffff");
    const [fontSize, setFontSize] = useState("1rem");
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");

    return (
        <div className="meme-box">
            <Image
                imgUrl={imgUrl}
                topText={topText}
                bottomText={bottomText}
                fontColor={fontColor}
                fontSize={fontSize}
                fontType={fontType}
            />
            <Controls
                imgUrl={imgUrl}
                fontType={fontType}
                fontColor={fontColor}
                fontSize={fontSize}
                topText={topText}
                bottomText={bottomText}
                setImgUrl={setImgUrl}
                setFontType={setFontType}
                setFontColor={setFontColor}
                setFontSize={setFontSize}
                setTopText={setTopText}
                setBottomText={setBottomText}
            />
        </div>
    )
}

export default Memegen