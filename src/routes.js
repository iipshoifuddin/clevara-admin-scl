import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './views/Home';
import Officer from './views/Officer';
import Request from './views/Request';
import Schools from './views/Schools';
import Banner from './views/Banner';
import Inbox from './views/Inbox';
import Login from './views/Auth/Login';
import Page404 from './views/errors/Page404';

const BaseRoute = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/officer" component={Officer} />
                <Route exact path="/requset" component={Request} />
                <Route exact path="/schools" component={Schools} />
                <Route exact path="/banner" component={Banner} />
                <Route exact path="/inbox" component={Inbox} />
                <Route path="" component={Page404} />
            </Switch>
        </>
    )
}

export default BaseRoute
