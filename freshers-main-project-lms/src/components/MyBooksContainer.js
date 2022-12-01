import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/StudentPage.css'
import { useContext, useEffect } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";
import { issuebooksContext } from "../App";
import { useState } from "react";
import MyBooksList from "./MyBooksList";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const MyBooksContainer = ({studentidget}) => {
  console.log(studentidget,"idd")
  const [studentdata, setStudentdata] = useContext(studentContext);
  const [bookData, setBookData] = useContext(allBooksContext);
  const [issuestate, setIssuestate] = useContext(issuebooksContext);
  const [tempmybooks,setTempMyBooks] = useState([])
  const [myBooksSearchState,setMyBooksSearchState] = useState('')

  useEffect(() =>{
    studentdata.map((studentobj) => {

      console.log(studentidget,"ffe")
      
      if(studentidget == studentobj.id )
      {
        console.log(studentobj.id,"ffef")
        const mybookstemparr = issuestate.map((issueobj) => {
   
       
          
          bookData.map((bookobj)=>{
            if(bookobj.bookid === issueobj.issuebookid){
              issueobj.bookid = bookobj.bookid
              issueobj.bookname = bookobj.title
              issueobj.bookauthor = bookobj.author
             
            }
          }
          )
          
         
          return issueobj
            
           
          })
          setTempMyBooks(mybookstemparr)
       
          
        
        
      }
    })

  },[studentdata,issuestate,bookData])

console.log(tempmybooks,"tt")

const myBooksSearchFunc = (e) => {
  const value =  e.target.value;
  console.log(value,"ss")
  setMyBooksSearchState(value)
}



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
              onChange={myBooksSearchFunc}
              placeholder="Search by book title or author"
            
            />
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
          </div>
        </div>

        <div className="d-flex pt-3 gap-md-2">
        <p className="sort-para mt-2 m-0 ">Sort By :</p>
        <Dropdown className=" dropdown-mybooks d-inline  ">
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


<div className="tabmybooks">
<Tabs 
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="m-0 d-flex gap-md-5 mt-3  border-bottom "
      fill
    >
      <Tab eventKey="home" title="Home" className="p-0">
        
      </Tab>
      <Tab eventKey="profile" title="Profile" className="p-0">
        
      </Tab>
     
      <Tab eventKey="contact" title="Contact" className="p-0" >
       
      </Tab>
    </Tabs>
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

 
{
  tempmybooks ?.filter((data) => {
      if (myBooksSearchState === "") {
        return data;
      } else if (
        data.bookname.toLowerCase().includes(myBooksSearchState.toLowerCase())
      ) {
        return data;
      } else if (
        data.bookauthor.toLowerCase().includes(myBooksSearchState.toLowerCase())
      ) {
        return data;
      }
    })
    .map((temp) => {
    if (temp.issuestudentid == studentidget){

      return(
       <MyBooksList temp = {temp}/>
      )
    }
    
      

})
  
}


 </div>


        </div>
     );
}
 
export default MyBooksContainer;