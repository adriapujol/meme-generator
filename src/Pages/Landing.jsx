import React from 'react';
import './Landing.scss';

function Landing({ makeMeme, setMakeMeme }) {

    const handleClick = () => {
        setMakeMeme(true);
    }

    return (
        <section className='landing'>
            <h1 className={makeMeme ? "smaller" : ""}>ME<span>ME</span></h1>
            {!makeMeme && <div className="subtitle">
                <h3>generator</h3>
            </div>}
            {!makeMeme && <button className="main-btn" onClick={handleClick}>MAKE A MEME</button>}
        </section>
    )
}

export default Landing