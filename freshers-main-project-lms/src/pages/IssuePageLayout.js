import IssuedPage from "../components/IssuedPageComponent";
import SideBar from "../components/Sidebar";

const IssueMain = () => {
    return ( 

        <div className="IssueMain-main d-flex gap-md-4 ">
        
        <div  className="sidebar-div col-3 col-md-2 sticky-top">
            <SideBar/>
        </div>


        <div className="col-9 ">
        <IssuedPage/>
    </div>
        
        
        
        </div>

     );
}
 
export default IssueMain;