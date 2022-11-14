import IssuedPage from "./IssuedPage";
import SideBar from "../components/Sidebar";

const IssueMain = () => {
    return ( 

        <div className="IssueMain-main d-flex gap-md-4 ">
        
        <div>
            <SideBar/>
        </div>


        <div className="col-9 ">
        <IssuedPage/>
    </div>
        
        
        
        </div>

     );
}
 
export default IssueMain;