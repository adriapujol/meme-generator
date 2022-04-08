import React, { useEffect } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './TakePhoto.scss';

function TakePhoto({ setImgUrl, setShowCam }) {

    const handleTakePhoto = (dataUri) => {
        setImgUrl(dataUri);
        setShowCam(false);
    }

    useEffect(() => {

        console.log(document.getElementById("camcam").offsetParent);

    }, [])

    const closeCam = () => {
        setShowCam(false);
    }


    return (
        <div className="camera-wrap" id="camcam">
            <button onClick={closeCam}>X</button>
            <Camera
                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
            />
        </div>
    )
}

export default TakePhoto;