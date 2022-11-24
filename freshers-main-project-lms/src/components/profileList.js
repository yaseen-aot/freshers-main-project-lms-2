import { Fragment, useState } from "react";
import { useContext, useEffect } from "react";
import { allBooksContext } from "../App";
import "../css/studentprofile.css";

const ProfileList = ({ issueobj,profileSearch }) => {
  const [bookData, setBookData] = useContext(allBooksContext);

  const [profileDayDiff, setProfileDayDiff] = useState(null);
  const [finestore,setFineStore] = useState(0)

  var currentDueDate = new Date(issueobj?.duedate);
  var Duemonth = currentDueDate.getMonth() + 1;
  var Duedate = currentDueDate.getDate();
  var Dueyear = currentDueDate.getFullYear();
  const dueddatedisplay = Duedate + "-" + Duemonth + "-" + Dueyear;
  


  

  useEffect(() => {
   

    var date1 = new Date();
    var date2 = new Date(Duemonth + "-" + Duedate + "-" + Dueyear);
    

    if (date1 > date2) {
      var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
      setProfileDayDiff(diffDays);
     
      
//       let finetotal = 0
//       let finecal = 0
//  finetotal = finetotal + profileDayDiff
//  finecal = finetotal * 10
//  console.log(finetotal,'jjj')
      
    }
  }, [issueobj]);


      
      // 


  return (
    <div className="Allbooks-row row py-3" key={issueobj.Issueid}>
      {
        bookData
        ?.filter((data) => {
          if (data === "") {
            return data;
          } else if (
            data.title.toLowerCase().includes(profileSearch.toLowerCase())
          ) {
            return data;
          } else if (
            data.author.toLowerCase().includes(profileSearch.toLowerCase())
          ) {
            return data;
          }
        })
        
        
        
        .map((bookobj) => {
        if (bookobj.bookid == issueobj.issuebookid) {
          return (
            <Fragment key={bookobj.bookid}>
              <div className="col profile-table-data">{bookobj.title}</div>
              <div className="col profile-table-data">{bookobj.author}</div>
            </Fragment>
          );
        }
      })}

      <div className="col profile-table-data">{issueobj.issuedate}</div>
      <div className="col profile-table-data">{dueddatedisplay}</div>
      <div className="col profile-table-data">
        {!issueobj.isreturn ? "-" : issueobj.isreturndate}
      </div>
      <div className="col profile-table-data" style={{color : profileDayDiff ? "red" : "09174A" }}>
        {profileDayDiff ? profileDayDiff * 10 : "0"}
        
      </div>
    </div>
  );
};

export default ProfileList;
