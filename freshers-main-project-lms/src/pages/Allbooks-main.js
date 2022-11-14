import SideBar from "../components/Sidebar";
import AllBooks from "./Allbooks";

const AllMain = () => {
    return ( 

        <div className="AllMain-main d-flex">
        
        <div className="col-3 col-md-2">
            <SideBar/>
        </div>


        <div>
        <AllBooks/>
    </div>
        
        
        
        </div>


     );
}
 
export default AllMain;