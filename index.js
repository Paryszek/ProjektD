import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './pages/layout.js'
import Cities from './pages/cities.js'
import City from './pages/city.js'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Cities}></IndexRoute>
      <Route path="/city/:id" component={City}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
