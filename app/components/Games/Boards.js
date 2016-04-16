let easy = [
  "958143267",
  "632795418",
  "741682395",
  "873214659",
  "594368721",
  "216579834",
  "427931586",
  "185426973",
  "369857142"
]

function getBoards(size) {
  let board = [];
  for(let i = 0; i<size; i++) {
    board.push(_.split(easy[i], ''))
  }
  return board;
}

const Boards = {
  getBoards
}

export default Boards;
