import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style.sass';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import RaisedButton from 'material-ui/lib/raised-button';
import Board from "../Board";
import _ from 'lodash';

class Hetmani extends Component {

  static propTypes = {
    hetmani: PropTypes.func,
    initGame: PropTypes.func,
    setSize: PropTypes.func,
    clearGame: PropTypes.func,
  };

  onSizeChange(e) {
    this.props.setSize(e.target.value);
  };

  componentDidMount() {
    this.props.clearGame();
  };

  render() {
    const { initGame, hetmani } = this.props;
    let className = hetmani.hideSettings ? styles.hide : styles.show;
    return (
      <div>
        <div className={ styles.backButton }>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={className} >
          <h3>Choose board size</h3>
          <RadioButtonGroup name="sudokuSize" onChange={ this.onSizeChange.bind(this) } { ...hetmani.hetmaniSize } defaultSelected="3">
            <RadioButton
              value="4"
              label="4"
              style={ styles.radioButton }
            />
            <RadioButton
              value="5"
              label="5"
              style={styles.radioButton}
            />
            <RadioButton
              value="8"
              label="8"
              style={ styles.radioButton }
            />
            <RadioButton
              value="10"
              label="10"
              style={ styles.radioButton }
            />
            <RadioButton
              value="12"
              label="12"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <RaisedButton label="Start" primary={ true } onClick={ () => initGame() } style={ styles } />
        </div>
        <div className={hetmani.hideSettings ? styles.show : styles.hide}>
          {
            _.isEmpty(hetmani.solutions) ?
            (<p>Nie znaleziono rozwiązania</p>) :
            (
            <div>
              {hetmani.solutions.map((result, index) =>
                <div key={ index }>
                  <Board { ...result } />
                </div>
              )}
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Hetmani
