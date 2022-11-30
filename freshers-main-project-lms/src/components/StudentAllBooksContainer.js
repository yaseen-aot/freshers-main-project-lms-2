import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/StudentPage.css'


const StudentAllBooksContainer = () => {
    return ( 
        
        <div className="container-student-page ">

        <p className="container-student-page-header pt-5">My Books</p>
        <hr />

<div className="search-sort-div  d-flex flex-wrap pb-3 ">
        <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
          <div className="mainsearch-div">
            <input
              className="inputsearch"
              type="text"
              placeholder="Search by book title or author"
             value={""}
            />
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
          </div>
        </div>

        <div className="d-flex pt-3 gap-md-2">
        <p className="sort-para mt-2 m-0 ">Sort By :</p>
        <Dropdown className=" dropdown-student d-inline  ">
        <Dropdown.Toggle id="dropdown-autoclose-true ">
         <span className="pe-5 ps-1">Issue Date</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Issue Date</Dropdown.Item>
          <Dropdown.Item href="#">Due Date</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      </div>

 </div>



 <div className="student-form-container container  text-center mt-5 pt-3 pb-5">
 <div className="student-form-field row py-3">
   <div className="col student-form-title">Book Title</div>
   <div className="col student-form-title">Author</div>
   <div className="col student-form-title">Issue Date</div>
   <div className="col student-form-title">Due Date</div>
   <div className="col student-form-title">Return Date</div>
   <div className="col student-form-title">Fine(Rs.10 per day)</div>
 </div>

 <div className="student-form-field row py-2" >
    <div className="col student-form-data flex-wrap">ff</div>
    <div className="col student-form-data flex-wrap">sd</div>
    <div className="col student-form-data">ss</div>
    <div className="col student-form-data">ss</div>
    <div className="col student-form-data">ss</div>
    <div className="col student-form-data ">ss</div>
</div>


 </div>


        </div>
     );
}
 
export default StudentAllBooksContainer;