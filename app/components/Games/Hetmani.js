import _ from 'lodash';

function newGame(size) {
  const SIZE = size * size;
  let solutions = [];
  for(let i = 0; i<size; i++) {
    solutions.push(_.fill(Array(size), 0))
  }
  return solutions;
}

function safeQueen(board, col, row) {

}

const Hetmani = {
  newGame
}

export default Hetmani;
