import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Container from './Container';
import Home from './Home';
import NotFound from './NotFound';


const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;

