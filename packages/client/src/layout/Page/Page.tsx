import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from '../Menu';

import classes from './Page.module.less';

export default function Page() {
    return <Router>
        <div className={classes.container}>
            <Menu/>

            <div className={classes.page}>
                <Switch>
                    <Route path="/hosts">
                        Hosts
                    </Route>
                    <Route path="/">
                        Dashboard
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>;
}
