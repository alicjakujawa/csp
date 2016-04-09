import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hetmani from '../components/Hetmani';
import * as HetmaniActions from '../actions/hetmani';

function mapStateToProps(state) {
  return {
    hetmani: state.hetmani
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HetmaniActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hetmani);
