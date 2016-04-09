import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.sass';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">Counter</Link>
          <p><Link to="/sudoku">Sudoku</Link></p>
          <p><Link to="/hetmani">Hetmani</Link></p>
        </div>
      </div>
    );
  }
}
