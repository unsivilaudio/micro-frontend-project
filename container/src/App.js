import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './Components/MarketingApp';
import Header from './Components/Header';

const App = props => {
    return (
        <BrowserRouter>
            <div className='Container'>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
};

export default App;
