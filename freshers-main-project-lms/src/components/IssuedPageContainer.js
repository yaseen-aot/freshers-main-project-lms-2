import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import {MdOutlineAssignmentReturn} from "react-icons/md";
// import ReactTooltip from "react-tooltip";
import IssueBookModal from "../Modals/IssueBookModal";
import { useContext } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";
import { issuebooksContext } from "../App";
import IssueReturn from "../Modals/ReturnModal";
import IssueBookList from "./IssueBookList";

const IssuedPage = () => {
  const [issuestate, setIssuestate] = useContext(issuebooksContext);
  const [studentdata, setStudentdata] = useContext(studentContext);
  const [bookData, setBookData] = useContext(allBooksContext);

  const [isreturnstate, setIsreturnstate] = useState(false);
  const [returnshow, setReturnShow] = useState(false);
  const [show, setShow] = useState(false);
  const [returnkey, setReturnKey] = useState("");
  const [issueTempArray,setIssueTempArray] = useState([])

  const handleReturnShow = () => setReturnShow(true);
  const handleShow = () => setShow(true);

  const returnGetkey = (returnkey) => {
    setReturnKey(returnkey);
  };


  const issuetemp = issuestate




  const issuetemparr = issuestate.map((issueobj) => {
   
   const temp = 
   {

    Issueid: issueobj.Issueid,
    issuebookname : "",
    issuestudentname : "",
    issuedate: issueobj.issuedate,
    duedate: issueobj.duedate,
    isreturn: issueobj.isreturn,
    isissue: issueobj.isissue,       
  }

  bookData.map((bookobj)=>{
    if(bookobj.bookid === issueobj.issuebookid){
      temp.issuebookname = bookobj.title
    }
  })

  
  studentdata.map((studentobj)=>{
    console.log(studentobj.id,"hh")
    console.log(issueobj.issuestudentid,"ll")
    if(studentobj.id == issueobj.issuestudentid){
      console.log("hello")
      temp.issuestudentname = studentobj.name
    }
  })


  // var currentIssueDate = new Date(issueobj?.issuedate);
  // var Issuemonth = currentIssueDate.getMonth() + 1;
  // var Issuedate = currentIssueDate.getDate();
  // var Issueyear = currentIssueDate.getFullYear();
  // const issueddatedisplay = Issuedate + "-" + Issuemonth + "-" + Issueyear;
 
 

  // var currentDueDate = new Date(issueobj?.duedate);
  // var Duemonth = currentDueDate.getMonth() + 1;
  // var Duedate = currentDueDate.getDate();
  // var Dueyear = currentDueDate.getFullYear();
  // const dueddatedisplay = Duedate + "-" + Duemonth + "-" + Dueyear;


  


             
             
            
  return temp
            
   
 })
 console.log(issuetemparr,"abc")

 


   





  return (
    <div className="div-main ">
      <IssueBookModal
        show={show}
        setShow={setShow}
        isreturnstate={isreturnstate}
      />

      <IssueReturn
        returnshow={returnshow}
        setReturnShow={setReturnShow}
        returnkey={returnkey}
        setIsreturnstate={setIsreturnstate}
      />
      <p className="main-header pt-5">Issued Books</p>
      <hr />

      <div className="search-btn d-flex flex-wrap ">
        <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
          <div className="mainsearch-div">
            <input
              className="inputsearch"
              type="text"
              placeholder="Search by book title or student "
            />
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
          </div>
        </div>

        <button className="main-button mt-2" onClick={handleShow}>
          {" "}
          Issue Book
        </button>
      </div>

      <div>
        <div className="Issuepagetable container  text-center mt-5 pt-3 pb-5">
          <div className="Issuepage-row row py-3">
            <div className="col head-Issuepage">Book Title</div>
            <div className="col head-Issuepage">Student</div>
            <div className="col head-Issuepage">Issue Date</div>
            <div className="col head-Issuepage">Due Date</div>
            <div className="col head-Issuepage">Fine (Rs. 10 per day)</div>
            <div className="col head-Issuepage">Actions</div>
          </div>

         

          {  issuestate?.map((issueobj) => {
            if (issueobj.isreturn === false) {
             
              return (
                <IssueBookList
                  issueobj={issueobj}
                  returnGetkey={returnGetkey}
                  handleReturnShow={handleReturnShow}
                  issuetemparr = {issuetemparr}
                />
                
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default IssuedPage;
