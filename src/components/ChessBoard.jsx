import React from 'react';

const PIECE_SYMBOLS = {
    "bP": "♟", "bR": "♜", "bN": "♞", "bB": "♝", "bQ": "♛", "bK": "♚",
    "wP": "♙", "wR": "♖", "wN": "♘", "wB": "♗", "wQ": "♕", "wK": "♔"
};

const STARTING_POSITION = [
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]
];

function ChessBoard() {
    const renderSquare = (row, col, piece) => {
        const isWhite = (row + col) % 2 === 0;
        return (
            <div
                key={`${row}-${col}`}
                className={`h-full w-full cursor-default flex flex-col justify-center items-center relative ${isWhite ? "bg-gray-400" : "bg-amber-700"}`}
            >
                {/* Displaying row and column indices */}
                <div className="text-xs absolute top-1 left-1 text-gray-700">
                    {`(${row}, ${col})`}
                </div>
                {/* Displaying the piece */}
                {piece ? <span className="text-4xl">{PIECE_SYMBOLS[piece]}</span> : null}
            </div>
        );
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div
                className="grid grid-cols-8 grid-rows-8 border border-black"
                style={{ width: "32rem", height: "32rem" }}
            >
                {STARTING_POSITION.map((row, rowIndex) =>
                    row.map((piece, colIndex) =>
                        renderSquare(rowIndex, colIndex, piece)
                    )
                )}
            </div>
        </div>
    );
}

export default ChessBoard;
