import React from 'react';
import './Info.scss';

function Info({ showInfo, setShowInfo }) {

    const handleCloseInfo = () => {
        setShowInfo(false);
    }

    return (
        <div className="info">
            <h2>How it works</h2>
            <ul>
                <li>Upload a picture from your device or take one with your camera. Caption it. Download it.</li>
                <li>The supported file extensions are jpeg, gif, or png.</li>
                <li>It was tested on the latest versions of Chrome, so if it's not working great with your current browser. Try Chrome instead.</li>
            </ul>
            <h2>Credits</h2>
            <ul>
                <li>Design and coding by <a href="https://adriapujol.github.io/portfolio/" target="_blank" rel="noreferrer">Adrià Pujol</a></li>
                <li><a href="https://www.flaticon.com/free-icons/photography" title="photography icons" target="_blank" rel="noreferrer">Photography icons created by Freepik - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/file-upload" title="file upload icons" target="_blank" rel="noreferrer">File upload icons created by Freepik - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/direct-download" title="direct download icons" target="_blank" rel="noreferrer">Direct download icons created by Pixel perfect - Flaticon</a></li>
            </ul>
            <button className='main-btn' onClick={handleCloseInfo}>got it!</button>
        </div>
    )
}

export default Info