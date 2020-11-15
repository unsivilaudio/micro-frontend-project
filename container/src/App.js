import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './Components/Header';
import Progress from './Components/Progress';
const MarketingLazy = lazy(() => import('./Components/MarketingApp'));
const AuthLazy = lazy(() => import('./Components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = props => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div className='Container'>
                    <Header
                        isSignedIn={isSignedIn}
                        onSignOut={() => setIsSignedIn(false)}
                    />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy
                                    onSignIn={() => setIsSignedIn(true)}
                                />
                            </Route>
                            <Route path='/' component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
