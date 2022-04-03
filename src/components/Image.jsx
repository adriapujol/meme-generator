import React, { useRef } from 'react';
import './Image.scss';
import picture from '../img/buzz_woody.jpg';
import picture2 from '../img/interesting_men.jpg';
import { useScreenshot, createFileName } from "use-react-screenshot";

function Image({ imgUrl, topText, bottomText, fontColor, fontSize, fontType }) {

    const style = {
        color: fontColor,
        fontSize: `${fontSize}rem`
    }

    const refImage = useRef(null);
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });


    const generateMeme = (image, { name = "img", extension = "gif" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const donwloadMeme = () => takeScreenShot(refImage.current).then(generateMeme);

    return (
        <>
            <figure ref={refImage}>
                <p style={style} className={`meme-top-text ${fontType}`}>{topText}</p>
                <img src={imgUrl === "" ? picture2 : imgUrl} alt="to be memed" />
                <p style={style} className={`meme-bottom-text ${fontType}`}>{bottomText}</p>
            </figure >
            <button className="main-btn" onClick={donwloadMeme}>Click me</button>
        </>
    )
}

export default Image