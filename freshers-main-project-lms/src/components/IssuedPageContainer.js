import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {MdOutlineAssignmentReturn} from "react-icons/md";
import ReactTooltip from "react-tooltip";
import IssueBookModal from "../Modals/IssueBookModal";

const IssuedPage = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);





    return ( 
        
        <div className="div-main ">
        <IssueBookModal show = {show} setShow = {setShow}/>
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

            <div className="Issuepage-row row py-3">
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
        
        
            
            <div className="Issuepage-row row py-2">

                <div className="col Issuepage-content">
                It Start With Us
                </div>

                <div className="col Issuepage-content">
                Colleen Hoover
                </div>

                <div className="col Issuepage-content">
                    English
                </div>

                <div className="col Issuepage-content">
                    5
                </div>

                <div className="col Issuepage-content">
                    2
                </div>

                <div className="col Issuepage-content">
                <button className="returnbutton" data-tip data-for="returntooltip">
                <MdOutlineAssignmentReturn className="Issuepage-return"/>
                </button>
                <ReactTooltip id="returntooltip" place="top" effect="solid">
                Mark as returned
                </ReactTooltip>
                </div>

            </div>
        
        </div>

    </div>
       
        
    </div>
        
     );
}
 
export default IssuedPage;