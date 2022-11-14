import SideBar from "../components/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const IssuedPage = () => {
    return ( 
        
        <div className="div-main mt-3">
        <p className="main-header">Issued Books</p>
        <hr/>

        <div className="search-btn d-flex flex-wrap ">
        
        

        <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">

        <div className="mainsearch-div">
        <input className="inputsearch" type="text"  placeholder="Search by book title or student "/>
        </div>
        <div>
        <AiOutlineSearch className="searchicon"/>
        </div>
        
        </div>

        <button className="main-button mt-2"> Issue Book</button>
        </div>
        

        <div>
        
        <div className="Issuepage-table d-flex mx-md-3 mt-5 p-md-3 justify-content-between ">
        <span className="head-Issuepage col-2">Book Title</span>
        <span className="head-Issuepage col-2">Student</span>
        <span className="head-Issuepage col-1">Issue Date</span>
        <span className="head-Issuepage col-1">Due Date</span>
        <span className="head-Issuepage col-1">Fine <br/> (Rs. 10 per day) </span>
        <span className="head-Issuepage col-1">Actions</span>
        </div>
        
        <div className="Issuepage-row d-flex mx-md-3  p-md-3 justify-content-between ">
        <span className="Issuepage-content col-2">It Start With Us</span>
        <span className="Issuepage-content col-2">Colleen Hoover</span>
        <span className="Issuepage-content col-1">22/33/44</span>
        <span className="Issuepage-content col-1">52/22/34</span>
        <span className="Issuepage-content col-1">444</span>
        <span className="Issuepage-content col-1  d-flex gap-md-2 p-0 mt-1">
        <MdModeEditOutline className="Allbooks-edit"/>
        
        
        
        
        </span>
        </div>

        </div>
       
        
        </div>
        
     );
}
 
export default IssuedPage;