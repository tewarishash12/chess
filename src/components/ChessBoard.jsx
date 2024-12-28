import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPieceAtPosition } from "../slices/gameSlice";

const PIECE_SYMBOLS = {
    "bP": "♟", 
    "bR": "♜", 
    "bN": "♞", 
    "bB": "♝", 
    "bQ": "♛", 
    "bK": "♚",
    "wP": "♙", 
    "wR": "♖", 
    "wN": "♘", 
    "wB": "♗", 
    "wQ": "♕", 
    "wK": "♔", 
};

function ChessBoard() {
    const board = useSelector((state) => state.game.board);
    const dispatch = useDispatch();

    const renderSquare = (row, col) => {
        const isWhite = (row + col) % 2 === 0; // Check if square is white or black
        return (
            <div
                key={`${row}-${col}`}
                className={`h-full w-full ${isWhite ? "bg-gray-400" : "bg-amber-700"}`}
                onClick={() => handleSquareClick(row, col)}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    {/* Optionally display square label like A1, H8 */}
                </div>
            </div>
        );
    };

    const renderPiece = (piece) => {
        if (!piece) return null;
        return <span className="text-4xl">{PIECE_SYMBOLS[piece]}</span>;
    };

    const handleSquareClick = (row, col) => {
        const piece = dispatch(getPieceAtPosition({ row, col }));
        console.log(piece); // Log piece info when a square is clicked
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div
                className="grid grid-cols-8 grid-rows-8 border border-black"
                style={{ width: "32rem", height: "32rem" }}
            >
                {board.map((row, rowIndex) =>
                    row.map((piece, colIndex) => {
                        return (
                            <div key={`${rowIndex}-${colIndex}`} className="relative">
                                {renderSquare(rowIndex, colIndex)}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    {renderPiece(piece)}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default ChessBoard;
