import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import AuthApp from './Components/AuthApp';
import MarketingApp from './Components/MarketingApp';
import Header from './Components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = props => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div className='Container'>
                    <Header />
                    <Switch>
                        <Route path='/auth' component={AuthApp} />
                        <Route path='/' component={MarketingApp} />
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
