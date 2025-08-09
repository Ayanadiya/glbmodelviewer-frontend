import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const portalElement=document.getElementById('overlays');

const Backdrop=props =>{
    return <div className={classes.Backdrop} onClick={props.onClose} />
}

const ModalOverlays= props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal= props => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </Fragment>
}

export default Modal;