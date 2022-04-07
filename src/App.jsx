import React from 'react';
import './App.scss';
import Landing from './Pages/Landing';
import Memegen from './Pages/Memegen';

function App() {
    return (
        <div className='container'>
            {/* <nav>About</nav> */}
            <Landing />
            {/* <Memegen /> */}
            {/* <footer>by Adrià Pujol</footer> */}
        </div>
    )
}

export default App;