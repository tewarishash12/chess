import { createSlice } from "@reduxjs/toolkit";

const initialBoardState = [

]


const gameSlice = createSlice({
    name: "game",
    initialState: {
        board: initialBoardState
    },
    reducers: {

    }
})

export const {  } = gameSlice.actions
export default gameSlice.reducer