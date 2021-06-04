import React from 'react';
import { HomePage } from '@pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </Router>
    );
}

export default Routes;