import { createSlice } from "@reduxjs/toolkit";

import w_king from "../assets/king_white.png";
import w_queen from "../assets/queen_white.png";
import w_rook from "../assets/rook_white.png";
import w_knight from "../assets/knight_white.png";
import w_bishop from "../assets/bishop_white.png";
import w_pawn from "../assets/pawn_white.png";
import b_king from "../assets/king_black.png";
import b_queen from "../assets/queen_black.png";
import b_rook from "../assets/rook_black.png";
import b_knight from "../assets/knight_black.png";
import b_bishop from "../assets/bishop_black.png";
import b_pawn from "../assets/pawn_black.png";

const initialBoardState = [
    [{ piece: "b_rook", img: b_rook, boxNotation: "a1" }, { piece: "b_knight", img: b_knight, boxNotation: "a2" }, { piece: "b_bishop", img: b_bishop, boxNotation: "a3" }, { piece: "b_queen", img: b_queen, boxNotation: "a4" }, { piece: "b_king", img: b_king, boxNotation: "a5" }, { piece: "b_bishop", img: b_bishop, boxNotation: "a6" }, { piece: "b_knight", img: b_knight, boxNotation: "a7" }, { piece: "b_rook", img: b_rook, boxNotation: "a8" }],
    [{ piece: "b_pawn", img: b_pawn, boxNotation: "b1" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b2" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b3" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b4" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b5" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b6" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b7" }, { piece: "b_pawn", img: b_pawn, boxNotation: "b8" }],
    [{ piece: null, img: null, boxNotation: "c1" }, { img: null, boxNotation: "c2" }, { img: null, boxNotation: "c3" }, { img: null, boxNotation: "c4" }, { img: null, boxNotation: "c5" }, { img: null, boxNotation: "c6" }, { img: null, boxNotation: "c7" }, { img: null, boxNotation: "c8" }],
    [{ piece: null, img: null, boxNotation: "d1" }, { img: null, boxNotation: "d2" }, { img: null, boxNotation: "d3" }, { img: null, boxNotation: "d4" }, { img: null, boxNotation: "d5" }, { img: null, boxNotation: "d6" }, { img: null, boxNotation: "d7" }, { img: null, boxNotation: "d8" }],
    [{ piece: null, img: null, boxNotation: "e1" }, { img: null, boxNotation: "e2" }, { img: null, boxNotation: "e3" }, { img: null, boxNotation: "e4" }, { img: null, boxNotation: "e5" }, { img: null, boxNotation: "e6" }, { img: null, boxNotation: "e7" }, { img: null, boxNotation: "e8" }],
    [{ piece: null, img: null, boxNotation: "f1" }, { img: null, boxNotation: "f2" }, { img: null, boxNotation: "f3" }, { img: null, boxNotation: "f4" }, { img: null, boxNotation: "f5" }, { img: null, boxNotation: "f6" }, { img: null, boxNotation: "f7" }, { img: null, boxNotation: "f8" }],
    [{ piece: "w_pawn", img: w_pawn, boxNotation: "g1" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g2" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g3" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g4" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g5" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g6" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g7" }, { piece: "w_pawn", img: w_pawn, boxNotation: "g8" }],
    [{ piece: "w_rook", img: w_rook, boxNotation: "h1" }, { piece: "w_knight", img: w_knight, boxNotation: "h2" }, { piece: "w_bishop", img: w_bishop, boxNotation: "h3" }, { piece: "w_queen", img: w_queen, boxNotation: "h4" }, { piece: "w_king", img: w_king, boxNotation: "h5" }, { piece: "w_bishop", img: w_bishop, boxNotation: "h6" }, { piece: "w_knight", img: w_knight, boxNotation: "h7" }, { piece: "w_rook", img: w_rook, boxNotation: "h8" }],
];

const gameSlice = createSlice({
    name: "game",
    initialState: {
        board: initialBoardState,
        selectedPosition: null,
        dropPosition: null,
        piece: null,
        turn: "white"
    },
    reducers: {
        selectPiece: (state, { payload }) => {
            state.selectedPosition = payload.position;

            const boardArray = state.board.flat();
            const foundSquare = boardArray.find(
                (square) => square.boxNotation === state.selectedPosition
            );

            state.piece = foundSquare ? foundSquare.piece : null;

        },
        dropPiece: (state, { payload }) => {
            state.dropPosition = payload.position;
        },
        pawn_movement: (state) => {
            if (state.piece.charAt(0) === state.turn.charAt(0)) {
                //Flatten the board so I can easily traverse the whole board
                const chessBoard = state.board.flat();
                // used to select the box where piece is present (check if the piece is actually present)
                const selectedSquare = chessBoard.find((box) => box.boxNotation === state.selectedPosition)
                // used to target the box where we place our piece (check if the box being targeted, is null or of opposite color)
                const targetedSquare = chessBoard.find((box) => box.boxNotation === state.dropPosition)

                // Get the current and targeted positions
                const current = state.selectedPosition;
                const target = state.dropPosition;
                // return if either of the case is not present
                if (!selectedSquare || !targetedSquare) return;

                //check the piece of pawn targeted
                const isWhite = state.piece.startsWith("w_") ? "white" : "black";
                //set the direction of pawn movement
                const direction = isWhite === "white" ? -1 : 1;
                //special rows
                const startRow = isWhite === "white" ? 'g' : 'b';
                const promotionRow = isWhite === "white" ? 'a' : 'h';

                //pawn movement setup
                const currentRow = current.charAt(0);
                const currentColumn = current.charAt(1);
                const targetRow = target.charAt(0);
                const targetColumn = target.charAt(1);
                //normal pawn movement
                if ((currentColumn === targetColumn) && (targetRow.charCodeAt(0) === (currentRow.charCodeAt(0) + direction))) {
                    console.log(isWhite)
                    if (!targetedSquare.piece) {
                        targetedSquare.piece = selectedSquare.piece;
                        selectedSquare.piece = null;
                        targetedSquare.img = selectedSquare.img;
                        selectedSquare.img = null;
                    }
                } // for twice move in first turn
                else if ((currentRow === startRow) && (targetColumn === currentColumn) && targetRow.charCodeAt(0) === currentRow.charCodeAt(0) + 2 * direction) {
                    const pathSquare = chessBoard.find((box) => box.boxNotation === String.fromCharCode(currentRow.charCodeAt(0) + direction) + currentColumn);
                    if (!targetedSquare.piece && !pathSquare.piece) {
                        targetedSquare.piece = selectedSquare.piece;
                        selectedSquare.piece = null;
                        targetedSquare.img = selectedSquare.img;
                        selectedSquare.img = null;
                    }
                } // capturing piece with pawn
                else if ((Math.abs(targetColumn - currentColumn) === 1) && (targetRow.charCodeAt(0) === currentRow.charCodeAt(0) + direction) && (targetedSquare.piece && targetedSquare.piece.startsWith(isWhite === "white" ? "b_" : "w_"))) {
                    targetedSquare.piece = selectedSquare.piece;
                    selectedSquare.piece = null;
                    targetedSquare.img = selectedSquare.img;
                    selectedSquare.img = null;
                } // incase the piece reaches the promotion row
                if (targetRow === promotionRow) {
                    targetedSquare.piece = isWhite === "white" ? "w_queen" : "b_queen";
                    targetedSquare.img = isWhite === "white" ? w_queen : b_queen;
                }
                state.turn = isWhite === "white" ? "black" : "white";
                state.selectedPosition = null;
                state.dropPosition = null;
                state.piece = null;
            } else {
                state.selectedPosition = null;
                state.dropPosition = null;
                state.piece = null;
                return alert(`This is ${state.turn} turn`);
            }
        },
        
    }
});

export const { selectPiece, dropPiece, pawn_movement } = gameSlice.actions;
export default gameSlice.reducer
