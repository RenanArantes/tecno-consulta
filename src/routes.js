import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Query from './pages/Query';

export default function Routes() {
  return (
    <BrowserRouter basename="tecno-consulta">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/query" component={Query} />
      </Switch>
    </BrowserRouter>
  );
}
