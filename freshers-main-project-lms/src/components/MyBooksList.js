import { useEffect, useState } from "react";

const MyBooksList = ({temp}) => {

    const [dayDiffMyBooks, setDayDiffMyBooks] = useState();

    var currentIssueDate = new Date(temp?.issuedate);
    var Issuemonth = currentIssueDate.getMonth() + 1;
    var Issuedate = currentIssueDate.getDate();
    var Issueyear = currentIssueDate.getFullYear();
    const issueddatedisplay = Issuedate + "-" + Issuemonth + "-" + Issueyear;
      
    var currentDueDate = new Date(temp?.duedate);
  var Duemonth = currentDueDate.getMonth() + 1;
  var Duedate = currentDueDate.getDate();
  var Dueyear = currentDueDate.getFullYear();
  const dueddatedisplay = Duedate + "-" + Duemonth + "-" + Dueyear;
 

  useEffect(() => {
    var date1 = new Date();
    var date2 = new Date(Duemonth + "-" + Duedate + "-" + Dueyear);

    if (date1 > date2) {
      var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
      setDayDiffMyBooks(diffDays);
     
    }
  }, [temp]);

 

    return ( 

        <div className="student-form-field row py-2" >
        <div className="col student-form-data flex-wrap">{temp.bookname}</div>
        <div className="col student-form-data flex-wrap">{temp.bookauthor}</div>
        <div className="col student-form-data">{issueddatedisplay}</div>
        <div className="col student-form-data">{dueddatedisplay}</div>
        <div className="col student-form-data">{temp.isreturndate ? temp.isreturndate : "-"} </div>
        <div className="col student-form-data " style={{color : dayDiffMyBooks ? "red" : "" }}>{dayDiffMyBooks ? dayDiffMyBooks * 10 : "0"}</div>
      </div>
     );
}
 
export default MyBooksList;
//dayDiff * 10 : "0"