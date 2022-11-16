import ProfileList from "../components/profileList";
import Profilecard from "../components/profilecard";
import SideBar from "../components/Sidebar";
const StudentProfile = () => {
    return ( 
        <div className="student-main d-flex gap-md-5  ">
        <div className="sidebar-div col-3 col-md-2 sticky-top">
       <SideBar/>
       </div> 
        
        <div className="col-9 col-md-9">
        <Profilecard/>

        <ProfileList/>
        </div>
    
        </div>
     );
}
 
export default StudentProfile;