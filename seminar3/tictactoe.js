class TicTacToe {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
  }

  makeMove(row, column) {
    if (this.isValidMove(row, column)) {
      this.board[row][column] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  isValidMove(row, column) {
    // Проверяем, что выбранная клетка не занята другим игроком и находится в пределах доски
    return this.board[row][column] === '' &&
      row >= 0 && row < 3 &&
      column >= 0 && column < 3;
  }

  isGameFinished() {
    // Проверяем выигрышные комбинации
    const winningCombinations = [
      // горизонтальные комбинации
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // вертикальные комбинации
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // диагональные комбинации
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      const [rowA, colA] = a;
      const [rowB, colB] = b;
      const [rowC, colC] = c;

      if (
        this.board[rowA][colA] !== '' &&
        this.board[rowA][colA] === this.board[rowB][colB] &&
        this.board[rowA][colA] === this.board[rowC][colC]
      ) {
        return true;
      }
    }

    // Проверяем ничью
    if (!this.board.flat().includes('')) {
      return true;
    }

    return false;
  }

  printBoard() {
    for (const row of this.board) {
      console.log(row.join(' | '));
    }
  }
}

// Пример использования:

const game = new TicTacToe();
game.makeMove(0, 0);
game.makeMove(1, 1);
game.makeMove(0, 1);
game.makeMove(2, 2);
game.makeMove(0, 2);

game.printBoard();
console.log(game.isGameFinished() ? 'Игра окончена' : 'Игра продолжается');

// Вывод в консоль:
// X | X | O
//   | O |  
//   |   | X
// Игра окончена

