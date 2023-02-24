import { configureStore , createSlice} from "@reduxjs/toolkit";
import {hindiMovieSlice,tamilMovieSlice,englishMovieSlice} from './MovieData';

const slice = createSlice({
    name: "selectedSeat",
    initialState: {seatData:"",userName:""},
    reducers:{
        selected(state, action){
            state.seatData = action.payload
        },
        user(state,action){
            state.userName = action.payload
        }
    }
})

export const action = slice.actions;

const store = configureStore({
    reducer : {
        seat : slice.reducer,
        hindi : hindiMovieSlice.reducer,
        tamil : tamilMovieSlice.reducer,
        english : englishMovieSlice.reducer
    }
})

export default store;