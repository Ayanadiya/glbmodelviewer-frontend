import { useSelector, useDispatch } from "react-redux";
import { modelViewerActions } from "../store/ModelViewer";
import classes from './ModelList.module.css'
import { Fragment } from "react";

const ModelList=()=>{
    const dispatch=useDispatch();
    const {models, isFetching}= useSelector((state)=>state.models);

    const getModel= async(id)=>{
      try {
        const response= await fetch(`https://glbmodelviewer-backend.onrender.com/files/${id}`);
        const blob= await response.blob();
        const url=URL.createObjectURL(blob);
        console.log("url", url);
        dispatch(modelViewerActions.setModelUrl(url));
        dispatch(modelViewerActions.openModal());
      } catch (error) {
        console.log(error);
      }
    }
    let text;
    if(isFetching===true)
    {
      text=<p>Getting models....</p>
    }
    else if(!models || models.length===0 )
    {
        text=<p>No models to display.</p>
    }
    else if(models.length>0)
    {
        text=<Fragment>
          <h1>Available 3D Models</h1>
          <div className={classes.cardContainer}>
      {models.map((model) => (
        <div key={model._id} className={classes.modelCard} onClick={()=>{getModel(model._id)}}>
          <strong>{model.filename || 'Unnamed Model'}</strong>
        </div>
      ))}
    </div>
    </Fragment>
    }
    return text;
}

export default ModelList;