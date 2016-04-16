import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style.sass';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import RaisedButton from 'material-ui/lib/raised-button';

class Sudoku extends Component {

  static propTypes = {
    sudoku: PropTypes.func,
    initGame: PropTypes.func,
    setSize: PropTypes.func,
    setLevel: PropTypes.func,
    clearGame: PropTypes.func,
  };

  onSizeChange(e) {
    this.props.setSize(e.target.value);
  };

  onLevelChange(e) {
    this.props.setLevel(e.target.value);
  }

  componentDidMount() {
    this.props.clearGame();
  };

  render() {
    const { initGame, sudoku } = this.props;
    return (
      <div>
        <div className={ styles.backButton }>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={sudoku.hideSettings ? styles.hide : styles.show}>
          <h3>Choose board size</h3>
          <RadioButtonGroup name="sudokuSize" onChange={ this.onSizeChange.bind(this) } { ...sudoku.sudokuSize } defaultSelected="3">
            <RadioButton
              value="3"
              label="3"
              style={ styles.radioButton }
            />
            <RadioButton
              value="4"
              label="4"
              style={styles.radioButton}
            />
            <RadioButton
              value="5"
              label="5"
              style={ styles.radioButton }
            />
          </RadioButtonGroup>
          <h3>Choose difficulty levels</h3>
          <RadioButtonGroup { ...sudoku.difficulty } onChange={ this.onLevelChange.bind(this) } name="difficultyLevel" defaultSelected="3">
            <RadioButton
              value="3"
              label="easy"
              style={ styles.radioButton }
            />
            <RadioButton
              value="4"
              label="medium"
              style={styles.radioButton}
            />
            <RadioButton
              value="5"
              label="hard"
              style={ styles.radioButton }
            />
          </RadioButtonGroup>
          <RaisedButton label="Start" primary={ true } onClick={ () => initGame() } style={ styles } />
        </div>
        <div className={sudoku.hideSettings ? styles.show : styles.hide}>
          {
            _.isEmpty(sudoku.solutions) ?
            (<p>Nie znaleziono rozwiązania</p>) :
            (
            <div>
              <p>solutions</p>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Sudoku;
