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

  const handleReturnShow = () => setReturnShow(true);
  const handleShow = () => setShow(true);

  const returnGetkey = (returnkey) => {
    console.log("fvreffre");
    setReturnKey(returnkey);
    console.log(returnkey, "dgggggg");
  };

  {
    issuestate?.map((issuemap) => {
      const issueFineFunc = () => {
        // const today = new Date()
        // const todaymonth = today.getMonth() + 1
        // const currentday = today.getDate()+"-"+ todaymonth + "-" + today.getFullYear()
        // console.log(typeof(currentday),"today")
        // console.log(typeof(issuemap.duedate),"duedate")
        // if(currentday > issuemap?.duedate){
        //     const diffTime = Math.abs(currentday.getDate() - issuemap?.duedate.getDate());
        //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        //     console.log(diffTime + " milliseconds");
        //     console.log(diffDays + " days");
      };

      // var parts =duedatetwo.split('-');
      // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
      // January - 0, February - 1, etc.
      // var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
      // console.log(mydate.toDateString());

      // const diffTime = Math.abs(date2 - date1);
      // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      // console.log(diffTime + " milliseconds");
      // console.log(diffDays + " days");
      // }
      issueFineFunc();
    });
  }

  // console.log(currentday,"today")

  // if(currentday > 6 ){

  // }

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

          {issuestate?.map((issueobj) => {
            if (issueobj.isreturn === false) {
              console.log(issueobj, "hhhhh");
              return (
                <IssueBookList
                  issueobj={issueobj}
                  returnGetkey={returnGetkey}
                  handleReturnShow={handleReturnShow}
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
