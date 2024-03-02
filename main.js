function makeWhitePieces(){
    aPawnWhite = new Pawn(0, 0);
    bPawnWhite = new Pawn(0, 0);
    cPawnWhite = new Pawn(0, 0);
    dPawnWhite = new Pawn(0, 0);
    ePawnWhite = new Pawn(0, 0);
    fPawnWhite = new Pawn(0, 0);
    gPawnWhite = new Pawn(0, 0);
    hPawnWhite = new Pawn(0, 0);
    aRookWhite = new Rook(1, 0);
    hRookWhite = new Rook(1, 0);
    bKnightWhite = new knight(2, 0);
    gKnightWhite = new knight(2, 0);
    cBishopWhite = new Bishop(3, 0);
    fBishopWhite = new Bishop(3, 0);
    queenWhite = new Queen(4, 0);
    kingWhite = new King(5, 0);
}

function makeDarkPieces(){
    aPawnBlack = new Pawn(0, 1);
    bPawnBlack = new Pawn(0, 1);
    cPawnBlack = new Pawn(0, 1);
    dPawnBlack = new Pawn(0, 1);
    ePawnBlack = new Pawn(0, 1);
    fPawnBlack = new Pawn(0, 1);
    gPawnBlack = new Pawn(0, 1);
    hPawnBlack = new Pawn(0, 1);
    aRookBlack = new Rook(1, 1);
    hRookBlack = new Rook(1, 1);
    bKnightBlack = new knight(2, 1);
    gKnightBlack = new knight(2, 1);
    cBishopBlack = new Bishop(3, 1);
    fBishopBlack = new Bishop(3, 1);
    queenBlack = new Queen(4, 1);
    kingBlack = new King(5, 1);
}

function setUpBoard(){
    board[6][0] = aPawnWhite;
    board[6][1] = aPawnWhite;
    board[6][2] = aPawnWhite;
    board[6][3] = aPawnWhite;
    board[6][4] = aPawnWhite;
    board[6][5] = aPawnWhite;
    board[6][6] = aPawnWhite;
    board[6][7] = aPawnWhite;
    board[7][0] = aRookWhite;
    board[7][1] = bKnightWhite;
    board[7][2] = cBishopWhite;
    board[7][3] = queenWhite;
    board[7][4] = kingWhite;
    board[7][5] = fBishopWhite;
    board[7][6] = gKnightWhite;
    board[7][7] = hRookWhite;


    board[1][0] = aPawnBlack;
    board[1][1] = aPawnBlack;
    board[1][2] = aPawnBlack;
    board[1][3] = aPawnBlack;
    board[1][4] = aPawnBlack;
    board[1][5] = aPawnBlack;
    board[1][6] = aPawnBlack;
    board[1][7] = aPawnBlack;
    board[0][0] = aRookBlack;
    board[0][1] = bKnightBlack;
    board[0][2] = cBishopBlack;
    board[0][3] = queenBlack;
    board[0][4] = kingBlack;
    board[0][5] = fBishopBlack;
    board[0][6] = gKnightBlack;
    board[0][7] = hRookBlack;
}
makeWhitePieces();
makeDarkPieces();
setUpBoard();

console.log(board)
