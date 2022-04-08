import React, { useEffect } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './TakePhoto.scss';

function TakePhoto({ setImgUrl, setShowCam }) {

    function handleTakePhoto(dataUri) {
        setImgUrl(dataUri);
        setShowCam(false);
    }

    useEffect(() => {

        console.log(document.getElementById("camcam").offsetParent);

    }, [])


    return (
        <div className="camera-wrap" id="camcam">
            <Camera
                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
            />
        </div>
    )
}

export default TakePhoto;