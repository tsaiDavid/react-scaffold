import React     from 'react';
import { Route } from 'react-router';

import App from 'components';

// we tell React Router to render our components at /
export default (
  <Route name='app' component={App} path='/'>
  </Route>
);
