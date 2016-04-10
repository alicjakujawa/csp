import _ from 'lodash';

let solutions = [];

function newGame(size) {
  solutions = [];
  hetmaniSolver(size);
  return solutions;
}

function safeQueen(board, row, col, N) {
  let i, j;
  //check row
  if (_.some(board[row], (x) => x == 1)){
    return false;
  }
  // top -> left
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == 1) {
      return false;
    }
  }

  // bottom -> left
  for (i = row, j = col; i < N && j >= 0; i++, j--) {
    if (board[i][j] == 1) {
      return false;
    }
  }

  return true;
}

function setQueen(board, col, N) {
  let i;
  if (col >= N) {
    return true;
  }
  for (i = 0; i < N; i++) {
    if (safeQueen(board, i, col, N)) {
      board[i][col] = 1;
      if (setQueen(board, col + 1, N)) {
        solutions.push(_.cloneDeep(board));
      }
      // backtracking
      board[i][col] = 0;
    }
  }
  return false;
}

function hetmaniSolver(N) {
  for(let i = 0; i < N; i++) {
    let board = generateMultArray(N);
    setQueen(board, i, N);
  }
}

function generateMultArray(N) {
  let singleSolution = [];
  for(let i = 0; i<N; i++) {
    singleSolution.push([]);
    for(let j = 0; j<N; j++) {
      singleSolution[i][j] = 0;
    }
  }
  return singleSolution;
}

const Hetmani = {
  newGame
}

export default Hetmani;
