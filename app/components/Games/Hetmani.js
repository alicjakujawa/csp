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

function setQueenForward(board, currentRow, N) {
  let i;
  if (currentRow >= N) {
    return true;
  }
  for (i = 0; i < N; i++) {
    if (board[currentRow][i] == 0) {
      board[currentRow][i] = 1 + currentRow;
      board = setInvalid(board, currentRow, N, i);
      if (setQueenForward(board, currentRow + 1, N)) {
        solutions.push(_.cloneDeep(board));
      }
      board[currentRow][i] = 0;
      resetBoard(board, currentRow, N);
    }
  }
  return false;
}

function setInvalid(b, currentRow, N, col) {
  let row, j;
  let board = _.cloneDeep(b);

  for(row = currentRow + 1; row < N; row++) {
    if(board[row][col] == 0) {
      board[row][col] = -(1+currentRow);
    }
    let rowGap = row - currentRow;
    if(col-rowGap>=0 && board[row][col-rowGap] == 0) {//left bottom diagonal position
      board[row][col-rowGap] = -(1+currentRow);
    }
    if(col+rowGap<N && board[row][col+rowGap] == 0) {//right bottom diagonal position
      board[row][col+rowGap] = -(1+currentRow);
    }
  }

  return board;
}

function resetBoard(board, currentRow, N) {
  for(let row=currentRow+1; row<N; row++) {
    for(let col=0; col<N; col++) {
      if(board[row][col] > currentRow || board[row][col] < -currentRow) {
        board[row][col] = 0;
      }
    }
  }
}

function hetmaniSolver(N) {
  let board = generateMultArray(N);

  let startTime = new Date().getTime();

  setQueen(board, 0, N);
  //setQueenForward(board, 0, N);

  let endTime = new Date().getTime();
  console.log(endTime - startTime, "solution length: ", solutions.length)
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
