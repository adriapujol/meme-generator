import React, { useState } from 'react';
import './Navbar.scss';

function Navbar({ makeMeme, setShowInfo }) {



    const handleShowInfo = () => {
        setShowInfo(true);
    }

    return (
        <nav className={makeMeme ? "nav-appear" : ""}>
            <button onClick={handleShowInfo}>about</button>
        </nav>
    )
}

export default Navbar;