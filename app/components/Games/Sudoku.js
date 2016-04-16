import _ from 'lodash';
import Boards from './Boards';

let solutions = [];

function newGame(N, level) {
  solutions = [];
  let board = Boards.getBoards(N*N);
  let gameData = prepareBoard(level, N, board);
  sudokuSolver(gameData.newBoard, gameData.nullFields, N);
  return solutions;
}

function sudokuSolver(board, unassignedLocation, N) {

  if(_.isEmpty(unassignedLocation)) {
    return true;
  }

  let [row, col] = unassignedLocation[0];
  let tail = _.tail(unassignedLocation);

  for(let num = 1; num <= N*N; num++) {
    if(isSafe(board, row, col, num, N)) {
      board[row][col] = num;
      if(sudokuSolver(board, _.cloneDeep(tail), N)) {
        solutions.push(_.cloneDeep(board))
      }
      board[row][col] = 0;
    }
  }
  return false;
}

function isSafe(board, row, col, num, N) {
  //check row
  for (let i = 0; i < N*N; i++)
    if (board[row][i] == num)
      return false;

  // check col
  for (let j = 0; j < N*N; j++)
    if (board[j][col] == num)
      return false;

  // box
  let r = row-(row%N);
  let c = col-(col%N);

  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++)
      if (board[j+r][i+c] == num)
        return false;

  return true;
}

function prepareBoard(level, N, board) {
  const M = 50;
  const SIZE = N * N;
  let removed = 0;
  let newBoard = _.cloneDeep(board);
  let nullFields = [];

  while (removed < M) {
    let i = _.random(SIZE-1);
    let j = _.random(SIZE-1);
    if (newBoard[i][j] != 0) {
      removed++;
      nullFields.push([i, j]);
      newBoard[i][j] = 0;
    }
  }
  return { newBoard, nullFields }
}

const Sudoku = {
  newGame
}

export default Sudoku;
