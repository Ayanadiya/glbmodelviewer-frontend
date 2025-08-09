import { Fragment, useState, useEffect } from "react";
import Header from "./Layout/Header";
import UploadForm from "./UploadForm";
import { useDispatch, useSelector } from "react-redux";
import { modelsActions } from "../store/Model";
import ModelList from "./ModelList";
import View from "./View";

const Dashboard= ()=>{
    const dispatch=useDispatch();
    const isModalOpen=useSelector((state)=>state.modelViewer.isModalOpen);
    const [isVisible, setVisible]=useState(false);

    const toggleForm= ()=>{
        setVisible(prev=>!prev);
    }

    const fetchModel= async()=>{
        try {
            const response= await fetch("http://127.0.0.1:4000/files", {
                method:"GET"
            })
            if(!response.ok){
                throw new Error("Internal server error");
            }
            const data= await response.json();
            console.log(data);
            dispatch(modelsActions.set(data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchModel()
    },[]);
    return(
        <Fragment>
        <Header onClick={toggleForm}/>
        {isVisible && <UploadForm onClose={toggleForm}/>}
        {isModalOpen && <View />}
        <ModelList/>
        </Fragment>
    )
}
export default Dashboard;