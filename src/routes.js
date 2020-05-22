import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Query from './pages/Query';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/tecno-consulta" exact component={Main}/>
        <Route path="/tecno-consulta/query" component={Query}/>
      </Switch>
    </BrowserRouter>
  );
}
