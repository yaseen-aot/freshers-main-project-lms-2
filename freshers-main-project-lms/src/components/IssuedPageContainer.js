import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {MdOutlineAssignmentReturn} from "react-icons/md";
import ReactTooltip from "react-tooltip";
import IssueBookModal from "../Modals/IssueBookModal";
import { useContext } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";
import { issuebooksContext } from "../App";
import IssueReturn from "../Modals/ReturnModal";


const IssuedPage = () => {

    const  [issuestate,setIssuestate] = useContext(issuebooksContext)
    const [studentdata,setStudentdata] = useContext(studentContext)
    const [bookData,setBookData] = useContext(allBooksContext)

       
    const [returnshow, setReturnShow] = useState(false);
    const [show, setShow] = useState(false);



    const handleReturnShow = () => setReturnShow(true);
    const handleShow = () => setShow(true);





    return ( 
        
        <div className="div-main ">

        <IssueBookModal show = {show} setShow = {setShow}/>
        <IssueReturn returnshow = {returnshow} setReturnShow = {setReturnShow}/>
        <p className="main-header pt-5">Issued Books</p>
        <hr/>

        <div className="search-btn d-flex flex-wrap ">
            <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
                <div className="mainsearch-div">
                    <input className="inputsearch" type="text"  placeholder="Search by book title or author "/>
                </div>
                <div>
                    <AiOutlineSearch className="searchicon"/>
                </div>           
            </div>

            <button className="main-button mt-2" onClick={handleShow}> Issue Book</button>
        </div>
            

    <div>
        
        <div className="Issuepagetable container  text-center mt-5 pt-3 pb-5">

      

            <div className="Issuepage-row row py-3" >
                <div className="col head-Issuepage">
                Book Title
                </div>
                <div className="col head-Issuepage">
                Student
                </div>
                <div className="col head-Issuepage">
                Issue Date
                </div>
                <div className="col head-Issuepage">
                Due Date
                </div>
                <div className="col head-Issuepage">
                Fine  (Rs. 10 per day)
                </div>
                <div className="col head-Issuepage">
                Actions 
                </div>
            </div>
            
        
            
            {issuestate.map((issueobj) => {
                if(issueobj.isreturn === false ){
                return(
       
            <div className="Issuepage-row row py-2" key={issueobj.Issueid }>
            
            {bookData.map((bookobj) => {
                if(issueobj.issuebookid === bookobj.bookid){
                    return(
                <div className="col Issuepage-content">
               {bookobj.title}
                </div>
                 ) 
                }})}
                 
                {studentdata.map((studentobj) => {
                    console.log(studentobj.id,'hh')
                    console.log(studentobj.name,"h")
                    console.log(issueobj.issuestudentid,'ddd')

                    if(  issueobj.issuestudentid == studentobj.id ){
                       console.log('hiuh')
                 return(

                <div className="col Issuepage-content">
                {studentobj.name}
                </div>
                ) 
                 } })}

                <div className="col Issuepage-content">
                { issueobj.issuedate}
                </div>

                <div className="col Issuepage-content">
                { issueobj.duedate}
                </div>

                <div className="col Issuepage-content">
                  
                </div>

                <div className="col Issuepage-content">
                <button className="returnbutton" data-tip data-for="returntooltip" onClick={handleReturnShow}>
                <MdOutlineAssignmentReturn className="Issuepage-return"/>
                </button>
                <ReactTooltip id="returntooltip" place="top" effect="solid" >
                Mark as returned
                </ReactTooltip>
                </div>

            </div>
            
       )   }  }  ) }
        
        </div>

    </div>
       
        
    </div>
        
     );
}
 
export default IssuedPage;