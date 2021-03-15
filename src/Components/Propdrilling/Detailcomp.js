import Notificationcmp from './Notificationcmp'
function Detailcomp(props){
    return(
        <div>


            <Notificationcmp
            toDetFname={props.toDashFname}
            toDetLname={props.toDashLname}
            toDetEmail={props.toDashEmail}
            toDetDOB={props.toDashDOB}
            toDetMobile={props.toDashMobile}
            />
        </div>
        
            

    )
}
export default Detailcomp