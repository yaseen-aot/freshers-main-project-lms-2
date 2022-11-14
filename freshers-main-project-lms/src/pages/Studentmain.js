import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";



const Studentmain = () => {
    return ( 

        <div className="div-main mt-3">
        <p className="main-header">Students</p>
        <hr/>

        <div className="search-btn d-flex flex-wrap ">
        
        

        <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">

        <div className="mainsearch-div">
        <input className="inputsearch" type="text"  placeholder="Search by student name or email"/>
        </div>
        <div>
        <AiOutlineSearch className="searchicon"/>
        </div>
        
        </div>

        <button className="main-button mt-2"> Add New Student</button>
        </div>
        

        <div>
        
        <div className="student-table d-flex mx-md-3 mt-5 p-md-3 justify-content-between">
        <span className="head-student ">Name</span>
        <span className="head-student ">Email</span>
        <span className="head-student ">Actions</span>
        </div>
        
        <div className="student-row d-flex mx-md-3  p-md-3 justify-content-between">
        <span className="student-content ">Mohamed Yaseen</span>
        <span className="student-content ">yasin@2003</span>
        <span className="student-content  d-flex gap-md-2 p-0 mt-1">
        <MdModeEditOutline className="Student-edit"/>
        <RiDeleteBin6Line className="Student-delete"/>
        <AiOutlineEye className="Student-eye"/>
        
        
        </span>
        </div>

        </div>
       
        
        </div>


     );
}
 
export default Studentmain;