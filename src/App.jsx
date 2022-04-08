import React, { useState } from 'react';
import './App.scss';
import Landing from './Pages/Landing';
import Memegen from './Pages/Memegen';
import Navbar from './components/Navbar';
import Info from './components/Info';

function App() {
    const [makeMeme, setMakeMeme] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    return (

        <div className='container'>
            {showInfo && <Info showInfo={showInfo} setShowInfo={setShowInfo} />}
            <Navbar makeMeme={makeMeme} setShowInfo={setShowInfo} />
            <Landing makeMeme={makeMeme} setMakeMeme={setMakeMeme} />
            {makeMeme && <Memegen makeMeme={makeMeme} />}
            {/* <footer>by Adrià Pujol</footer> */}
        </div>
    )
}

export default App;