import Childcomponent from './Childcomponent'

function Parentcomponent(props){
    return(
        <div>
            <Childcomponent
            Cname={props.Pname}
            Cgender={props.gender}
            Cage={props.age}
            Cemail={props.email}/>
        </div>
    )
}
export default Parentcomponent;