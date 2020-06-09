import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Auth/Login';
import Page404 from './views/errors/Page404';

const BaseRoute = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route path="" component={Page404} />
            </Switch>
        </>
    )
}

export default BaseRoute
