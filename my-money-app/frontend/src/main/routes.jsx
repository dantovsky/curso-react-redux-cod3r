import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import App from './app'
import Dashboard from "../dashboard/dashboard";
// import Dashboard2 from "../dashboard2/dashboard2"; // Componente sem Redux (para exemplo)
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycles" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);

// Versao 1
/*
export default (props) => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="billingCycles" component={BillingCycle} />
        <Redirect from="*" to="/" />
    </Router>
);
*/