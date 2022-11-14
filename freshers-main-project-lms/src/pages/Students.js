import SideBar from "../components/Sidebar";
import Studentmain from "./Studentmain";


const Student = () => {
    return ( 
        
        <div className="student-main d-flex gap-md-4  ">
       <div className="col-3 col-md-2">
       <SideBar/>
       </div> 

       <div className="col-9 ">
       <Studentmain/>
       </div>
       
        
        
        </div>

     );
}
 
export default Student;