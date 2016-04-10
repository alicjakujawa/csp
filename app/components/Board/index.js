import React, { PropTypes } from "react";
import styles from './style.sass';

export default function Board(props) {
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
                  <td key={j} className={cell == 1? styles.queen : styles.cell}>{cell.length}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}
