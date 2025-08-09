const Button=(props)=>{
    return <button className={props.className} type={props.type || "button"} onClick={props.onClick} >{props.label}</button>
}

export default Button;