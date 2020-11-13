import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './Components/MarketingApp';
import Header from './Components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = props => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div className='Container'>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
