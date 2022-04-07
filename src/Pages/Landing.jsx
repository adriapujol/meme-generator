import React from 'react';
import './Landing.scss';

function Landing() {
    return (
        <section className='landing'>
            <div className="title-box">
                <h1>ME<span>ME</span></h1>
                <h3>generator</h3>
            </div>
            <button className="main-btn" onClick={() => console.log("make a meme")}>MAKE A MEME</button>
        </section>
    )
}

export default Landing