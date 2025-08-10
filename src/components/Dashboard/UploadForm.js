import { useState } from "react";
import Modal from "../UI/Modal"
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { modelsActions } from "../../store/Model";

const UploadForm= (props) =>{
    const dispatch=useDispatch();
    const [file, setFile]=useState(null);
    const [isUploading, setIsUploading]=useState(false);

    const fileChangeHandler= (e) => {
        const selectedFile= e.target.files[0];

        if (selectedFile && selectedFile.name.endsWith('.glb')){
            setFile(selectedFile)
        }
        else
        {
            alert('Please select a valid .glb file');
            setFile(null);
        }
    };

    const formSubmitHandler= async (event) => {
        event.preventDefault();
        if(!file) return;
        setIsUploading(true);

        const formData= new FormData();
        formData.append('file', file);

        try {
            const response= await fetch("https://glbmodelviewer-backend.onrender.com/upload",{
                method:"POST",
                body:formData
            });
            console.log(response);
            if(!response.ok){
                throw new Error('Internal server error');
            }
            const data=await response.json();
            console.log(data);
            dispatch(modelsActions.addItem(data));
            alert('Upload successful')
            setFile(null);
            props.onClose();
        } catch (error) {
            console.log(error);
            alert("Upload failed");
        }finally{
            setIsUploading(false);
        }
    };

    return (
        <Modal onClose={props.onClose}>
            {isUploading && <p>Uploading.....</p>}
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="file">Select File</label>
                    <input type="file" accept=".glb" onChange={fileChangeHandler} />
                </div>
                {file && <p>Selected File:{file.name}</p>}
                <div>
                    <Button type="cancel" label="Cancel" onClick={props.onClose}/>
                    <Button type="submit" label="Upload" />
                </div>  
            </form>
        </Modal>
    )
};

export default UploadForm;