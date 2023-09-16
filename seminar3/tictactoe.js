const readline = require('readline');

class TicTacToe {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  startGame() {
    console.log('Игра началась. Для совершения хода введите номер строки (0-2) и номер столбца (0-2), разделенные пробелом.');

    this.printBoard();
    this.rl.on('line', (input) => {
      const [row, col] = input.trim().split(' ');
      this.makeMove(parseInt(row), parseInt(col));
    });
  }

  makeMove(row, column) {
    if (this.isValidMove(row, column)) {
      this.board[row][column] = this.currentPlayer;
      this.printBoard();

      if (this.isGameFinished()) {
        console.log(`Игра окончена.Победил игрок ${this.currentPlayer}!`);
        this.rl.close();
        process.exit();
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    } else {
      console.log('Недопустимый ход. Попробуйте еще раз.');
    }
  }

  isValidMove(row, column) {
    return (
      this.board[row][column] === '' &&
      row >= 0 && row < 3 &&
      column >= 0 && column < 3
    );
  }

  isGameFinished() {
    // Проверяем выигрышные комбинации
    const winningCombinations = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
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
      console.log('Игра окончена. Ничья!');
      this.rl.close();
      process.exit();
    }

    return false;
  }

  printBoard() {
    console.log('-------------');
    for (const row of this.board) {
      console.log(`| ${row.join(' | ')} |`);
      console.log('-------------');
    }
  }
}

// Запуск игры
const game = new TicTacToe();
game.startGame();
