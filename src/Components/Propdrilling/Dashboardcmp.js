import Detailcomp from './Detailcomp'

function Dashboardcmp(props){
    return(
        <div>
            <Detailcomp
            
            toDashFname={props.Fname}
            toDashLname={props.Lname}
            toDashEmail={props.Email}
            toDashDOB={props.DoB}
            toDashMobile={props.Mobile}
            
            
            />


        </div>
    )
}
export default Dashboardcmp