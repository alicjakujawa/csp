import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sudoku from '../components/Sudoku';
import * as SudokuActions from '../actions/sudoku';

function mapStateToProps(state) {
  return {
    sudoku: state.sudoku
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SudokuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
