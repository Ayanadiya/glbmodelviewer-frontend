import { createSlice } from "@reduxjs/toolkit";

const modelViewerSlice= createSlice({
    name:'modelViewer',
    initialState:{
        selectedModelUrl:null,
        isModalOpen:false,
    },
    reducers:{
        setModelUrl(state,action){
            state.selectedModelUrl=action.payload;
        },
        openModal(state){
            state.isModalOpen=true;
        },
        closeModal(state){
            state.isModalOpen=false;
            state.selectedModelUrl=null;
        }
    }
})

export const  modelViewerActions=modelViewerSlice.actions;
export default modelViewerSlice.reducer;