import { useSelector, useDispatch } from "react-redux";
import { modelViewerActions } from "../store/ModelViewer";
import classes from './ModelList.module.css'

const ModelList=()=>{
    const dispatch=useDispatch();
    const models= useSelector((state)=>state.models.models);

    const getModel= async(id)=>{
      try {
        const response= await fetch(`http://127.0.0.1:4000/files/${id}`);
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
    if(!models || models.length===0)
    {
        text=<p>No models to dislay.</p>
    }
    if(models.length>0)
    {
        text=<div className={classes.cardContainer}>
      {models.map((model) => (
        <div key={model._id} className={classes.modelCard} onClick={()=>{getModel(model._id)}}>
          <strong>{model.filename || 'Unnamed Model'}</strong>
        </div>
      ))}
    </div>
    }
    return text;
}

export default ModelList;