import React, { useEffect, useRef, useState } from 'react';
import './Image.scss';
import picture from '../img/buzz_woody.jpg';
import picture2 from '../img/interesting_men.jpg';
import downloadIcon from '../img/direct-download.png';
import { useScreenshot, createFileName } from "use-react-screenshot";

function Image({ imgUrl, topText, bottomText, fontColor, fontSize, fontType }) {

    const [existImage, setExistImage] = useState(true);
    const [imgType, setImgType] = useState("jpeg");

    const refImage = useRef(null);

    useEffect(() => {
        // const currentWidth = refImage.current.offsetWidth;
        const currentheight = refImage.current.offsetHeight;
        console.log(currentheight);


        if (currentheight < 150) {
            console.log(currentheight);
            setExistImage(false);
        } else {
            setExistImage(true);
            console.log(currentheight);

        }
    }, [imgUrl]);

    const style = {
        color: fontColor,
        fontSize: `${fontSize}rem`
    }

    const handleImgType = type => {
        setImgType(type);
    }

    const [image, takeScreenShot] = useScreenshot({
        type: `image/${imgType}`,
        quality: 1.0
    });


    const generateMeme = (image, { name = "meme", extension = imgType } = {}) => {
        console.log(refImage.current.offsetWidth);
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const donwloadMeme = () => takeScreenShot(refImage.current).then(generateMeme);

    return (
        <div className='img-wrap'>
            <figure ref={refImage}>
                {(existImage && imgUrl !== "") && <p style={style} className={`meme-top-text ${fontType}`}>{topText}</p>

                }
                <img src={imgUrl === "" ? picture2 : imgUrl} alt="to be memed" />
                <p style={style} className={`meme-bottom-text ${fontType}`}>{bottomText}</p>
            </figure >
            <div className="download-box">
                <div className="img-types">
                    <button className={imgType === "jpeg" ? "select-btn active" : "select-btn"} onClick={() => handleImgType("jpeg")}>jpeg</button>
                    <button className={imgType === "gif" ? "select-btn active" : "select-btn"} onClick={() => handleImgType("gif")}>gif</button>
                    <button className={imgType === "png" ? "select-btn active" : "select-btn"} onClick={() => handleImgType("png")}>png</button>
                </div>
                <button className="download-btn" onClick={donwloadMeme}></button>
            </div>
        </div>
    )
}

export default Image