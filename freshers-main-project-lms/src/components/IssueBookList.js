import ReactTooltip from "react-tooltip";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { Fragment, useContext, useEffect, useState } from "react";
import { allBooksContext, studentContext } from "../App";
import Profilecard from "./profilecard";

const IssueBookList = ({ issueobj, returnGetkey, handleReturnShow }) => {
  const [studentdata, setStudentdata] = useContext(studentContext);
  const [bookData, setBookData] = useContext(allBooksContext);
  const [dayDiff, setDayDiff] = useState();

  console.log(issueobj, "hen");

  var currentIssueDate = new Date(issueobj?.issuedate);
  var Issuemonth = currentIssueDate.getMonth() + 1;
  var Issuedate = currentIssueDate.getDate();
  var Issueyear = currentIssueDate.getFullYear();
  const issueddatedisplay = Issuedate + "-" + Issuemonth + "-" + Issueyear;
  // const issueddate = issueobj.issuedate.getDate()+"-"+ issueobj.issuedate.getMonth()+1 + "-" + issueobj.issuedate.getFullYear()
  console.log(issueddatedisplay);

  var currentDueDate = new Date(issueobj?.duedate);
  console.log(issueobj, "issueobj");
  var Duemonth = currentDueDate.getMonth() + 1;
  var Duedate = currentDueDate.getDate();
  var Dueyear = currentDueDate.getFullYear();
  const dueddatedisplay = Duedate + "-" + Duemonth + "-" + Dueyear;
  console.log(issueobj, "ttty");

  useEffect(() => {
    // const today = new Date()
    // const todaymonth = today.getMonth() + 1
    // const todayDate = today.getDate()
    // const todayYear = today.getFullYear()
    // const currentday = today.getDate()+"-"+ todaymonth + "-" + today.getFullYear()

    var date1 = new Date();
    var date2 = new Date(Duemonth + "-" + Duedate + "-" + Dueyear);
    console.log(date1, date2, "yess");

    if (date1 > date2) {
      var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
      setDayDiff(diffDays);
      console.log(diffDays, "ttt");
    }
  }, [issueobj]);

  return (
    <Fragment>
      <div className="Issuepage-row row py-2" key={issueobj.Issueid}>
        {bookData?.map((bookobj) => {
          console.log(bookobj.remaining, "huy");

          if (issueobj.issuebookid === bookobj.bookid) {
            return <div className="col Issuepage-content">{bookobj.title}</div>;
          }
        })}

        {studentdata?.map((studentobj) => {
          if (issueobj.issuestudentid == studentobj.id) {
            console.log("hiuh");
            return (
              <div className="col Issuepage-content">{studentobj.name}</div>
            );
          }
        })}

        <div className="col Issuepage-content">{issueddatedisplay}</div>

        <div className="col Issuepage-content">{dueddatedisplay}</div>

        <div className="col Issuepage-content">
          {dayDiff ? dayDiff * 10 : "0"}
        </div>

        <div className="col Issuepage-content">
          <button
            className="returnbutton"
            data-tip
            data-for="returntooltip"
            onClick={() => {
              handleReturnShow();
              returnGetkey(issueobj.Issueid);
            }}
          >
            <MdOutlineAssignmentReturn className="Issuepage-return" />
          </button>
          <ReactTooltip id="returntooltip" place="top" effect="solid">
            Mark as returned
          </ReactTooltip>
        </div>
      </div>
    </Fragment>
  );
};

export default IssueBookList;
