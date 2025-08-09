import Button from "../UI/Button";
import classes from "./Header.module.css";


const Header= props  => {
    return (
        <header className={classes.header}>
            <h1>3D Model Viewer</h1>
            <Button label="Upload your model" onClick={props.onClick}/>
        </header>
    )
}

export default Header;