import { configureStore } from "@reduxjs/toolkit";
import modelsReducer from './Model'
import modelViewerReducer from './ModelViewer'

const store= configureStore({
    reducer:{models:modelsReducer, modelViewer:modelViewerReducer}
})

export default store;