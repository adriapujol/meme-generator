import React, { useEffect, useRef, useState } from 'react';
import './Image.scss';
import picture from '../img/buzz_woody.jpg';
import picture2 from '../img/interesting_men.jpg';
import { useScreenshot, createFileName } from "use-react-screenshot";

function Image({ imgUrl, topText, bottomText, fontColor, fontSize, fontType }) {

    const [existImage, setExistImage] = useState(true);

    const refImage = useRef(null);

    useEffect(() => {
        const currentWidth = refImage.current.offsetWidth;
        const currentheight = refImage.current.offsetHeight;

        if (currentWidth < 100 || currentheight < 100) {
            setExistImage(false);
        } else {
            setExistImage(true);
        }
    }, [imgUrl]);

    const style = {
        color: fontColor,
        fontSize: `${fontSize}rem`
    }

    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });


    const generateMeme = (image, { name = "img", extension = "gif" } = {}) => {
        console.log(refImage.current.offsetWidth);
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
            <button className="main-btn" onClick={donwloadMeme}>Download me</button>
        </>
    )
}

export default Image