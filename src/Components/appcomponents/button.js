function Button(props){
    return(
        <button style={{background: props.color}}
        onClick = {props.onClickButton}>
        {props.text}
        
        </button>
    )
}
export default Button