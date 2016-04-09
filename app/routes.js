import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import SudokuPage from './containers/SudokuPage';
import HetmaniPage from './containers/HetmaniPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/sudoku" component={SudokuPage} />
    <Route path="/hetmani" component={HetmaniPage} />
  </Route>
);
