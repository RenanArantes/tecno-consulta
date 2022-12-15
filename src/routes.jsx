import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Main from './pages/Main';
import Query from './pages/Query';

export default function Routes() {
  return (
    <BrowserRouter basename="tecno-consulta">
        <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/query" component={Query} />
      </Switch>
    </BrowserRouter>
  );
}
