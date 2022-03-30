import React from 'react';
import Controls from './components/Controls';
import Image from './components/Image';

function App() {
    return (
        <div className='container'>
            <div className="content-wrapper">
                <Image />
                <Controls />
            </div>
        </div>
    )
}

export default App;