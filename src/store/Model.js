import { createSlice } from "@reduxjs/toolkit";

const initialState={
    models:[],
    isFetching:false,
}

const modelsSlice= createSlice({
    name:'models',
    initialState:initialState,
    reducers:{
        addItem(state, action){
            const newItem=action.payload;
            state.models.push({
                ...newItem
            });
        },
        set(state, action){
            state.models=action.payload;
        },
        setFetching(state){
            state.isFetching=true;
        },
        setNotFetching(state){
            state.isFetching=false;
        }
    }
})

export const modelsActions= modelsSlice.actions;

export default modelsSlice.reducer;