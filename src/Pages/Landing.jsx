import React, { useState } from 'react';
import './Landing.scss';

function Landing({ makeMeme, setMakeMeme }) {

    const handleClick = () => {
        setMakeMeme(true);
    }

    return (
        <section className='landing'>
            <h1 className={makeMeme ? "smaller" : ""}>ME<span>ME</span></h1>
            <div className="subtitle">
                <h3 className={makeMeme ? "bye-smaller" : ""}>generator</h3>
            </div>
            {/* <div className={makeMeme ? "move title-box" : "title-box"} >
            </div> */}
            <button className={makeMeme ? "bye main-btn" : "main-btn"} onClick={handleClick}>MAKE A MEME</button>
        </section>
    )
}

export default Landing