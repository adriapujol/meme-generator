import React, { useState } from 'react';
import './App.scss';
import Landing from './Pages/Landing';
import Memegen from './Pages/Memegen';

function App() {
    const [makeMeme, setMakeMeme] = useState(false);
    return (

        <div className='container'>
            {/* <nav>About</nav> */}
            <Landing makeMeme={makeMeme} setMakeMeme={setMakeMeme} />
            <Memegen makeMeme={makeMeme} />
            {/* <footer>by Adrià Pujol</footer> */}
        </div>
    )
}

export default App;