import _ from 'lodash';

function newGame(size) {
  let solutions = [];
  for(let i = 0; i<size; i++) {
    solutions.push(_.fill(Array(size), 0))
  }
  console.log(safeQueen(solutions, 0, 1, 3));
  return solutions;
}

function safeQueen(board, col, row, N) {
  let i, j;
  //check row
  if (_.some(board[row], (x) => x == 1))
    return false;
  // top -> left
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j] == 1)
      return false;
  // bottom -> left
  for (i = row, j = col; i < N && j >= 0; i++, j--)
    if (board[i][j] == 1)
      return false;

  return true;
}

const Hetmani = {
  newGame
}

export default Hetmani;
