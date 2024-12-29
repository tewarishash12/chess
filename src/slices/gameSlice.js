import { createSlice } from "@reduxjs/toolkit";

const initialBoardState = [
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]
];



const gameSlice = createSlice({
    name: "game",
    initialState: {
        board: initialBoardState
    },
    reducers: {

    },
})

export const { pawn_movement } = gameSlice.actions
export default gameSlice.reducer