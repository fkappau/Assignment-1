import Profilecmp from './Profilecmp'
function Notificationcmp(props){
    return(
        <div>
            <Profilecmp
            toNotFname={props.toDetFname}
            toNotLname={props.toDetLname}
            toNotEmail={props.toDetEmail}
            toNotDOB={props.toDetDOB}
            toNOtMobile={props.toDetMobile}
            />
        </div>
    )
}
export default Notificationcmp