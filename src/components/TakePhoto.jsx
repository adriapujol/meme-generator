import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './TakePhoto.scss';

function TakePhoto({ setImgUrl, setShowCam }) {

    function handleTakePhoto(dataUri) {
        setImgUrl(dataUri);
        setShowCam(false);
    }


    return (
        <div className="camera-wrap">
            <Camera
                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
            />
        </div>
    )
}

export default TakePhoto;