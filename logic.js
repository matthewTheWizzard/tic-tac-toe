let players = ['x', 'o'];
let activePlayer = 0;
let board;

// Функция запускает игру и отрисовывает сетку
function startGame(){
  activePlayer = players[0];  
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  renderBoard(board);
};

// Функция проверяет совпадение по 8 измерениям
function checkForWin(playerNumber){
    if((board[0][2] == activePlayer) && (board[1][2] == activePlayer) && (board[2][2] == activePlayer)) {
        showWinner(activePlayer);
    }
    else if ((board[0][1] == activePlayer) && (board[1][1] == activePlayer) && (board[2][1] == activePlayer)){
        showWinner(activePlayer);
    }
    else if ((board[0][0] == activePlayer) && (board[1][0] == activePlayer) && (board[2][0] == activePlayer)){
        showWinner(activePlayer);
    }
    else if ( (board[0][0] == activePlayer) && (board[0][1] == activePlayer) && (board[0][2] == activePlayer)){
        showWinner(activePlayer);
    }
    else if ((board[1][0] == activePlayer) && (board[1][1] == activePlayer) && (board[1][2] == activePlayer)){
        showWinner(activePlayer);
    }
    else if ( (board[2][0] == activePlayer) && (board[2][1] == activePlayer) && (board[2][2] == activePlayer)){
        showWinner(activePlayer);
    }
    else if ( (board[0][0] == activePlayer) && (board[1][1] == activePlayer) && (board[2][2] == activePlayer)){
        showWinner(activePlayer);
    }
    else if ( (board[2][0] == activePlayer) && (board[1][1] == activePlayer) && (board[2][0] == activePlayer)){
        showWinner(activePlayer);
    }
    else{
        activePlayer = players[playerNumber];
    }
}

// Функция добавляет Х или О в таблицу
function click(row, col)
{ 
  // Игрок Х
  if(activePlayer==players[0])
  {
    board[row][col] = activePlayer;
    renderBoard(board);
    // Проверка на победителя X, смена игрока на 0
    checkForWin(1)
  }
  else
  {
    board[row][col] = activePlayer;
    renderBoard(board);
    // Проверка на победителя O, смена игрока на Х
    checkForWin(0)
  }
}   

