import { useDispatch, useSelector } from 'react-redux';
import { modelViewerActions } from '../../store/ModelViewer';
import Viewer from './Viewer';
import Modal from '../UI/Modal';

const View= ()=>{
    const dispatch= useDispatch();
    const {selectedModelUrl, isModalOpen}= useSelector((state)=>state.modelViewer);
    if(!isModalOpen || !selectedModelUrl) return null;

    return (
        <Modal onClose={()=>dispatch(modelViewerActions.closeModal())}>
            <div style={{ width:'100%', height: '350px'}}>
                <Viewer modelurl={selectedModelUrl}/>
            </div> 
        </Modal>
    )
}

export default View;