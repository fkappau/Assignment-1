function Childcomponent(props){
    return(
        <div>Child Component
            <h2>Name: {props.Cname}</h2>
            <h2>Gender: {props.Cgender}</h2>
            <h2>Age: {props.Cage}</h2>
            <h2>email: {props.Cemail}</h2>
        </div>
        
    )
}
export default Childcomponent;