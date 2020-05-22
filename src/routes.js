import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Query from './pages/Query';

export default function Routes() {
  return(
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/query" component={Query}/>
      </Switch>
    </HashRouter>
  );
}
