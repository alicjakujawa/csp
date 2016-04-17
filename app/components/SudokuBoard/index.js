import React, { PropTypes } from "react";
import styles from './style.sass';

export default function SudokuBoard(props) {
  function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }
  return (
    <div>
      <table className={ styles.board }>
          <tbody>
            {mapObject(props, (i, value) =>
              <tr key={i}>
                {value.map((cell, j) =>
                  <td key={j} className={styles.cell}>{cell}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}
