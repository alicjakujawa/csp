import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import sudoku from './sudoku';

const rootReducer = combineReducers({
  counter,
  sudoku,
  routing
});

export default rootReducer;
