import { useState, useContext, useEffect } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";
import { issuebooksContext } from "../App";
import { Fragment } from "react";
import { MdArrowBackIos, MdEmojiObjects } from "react-icons/md";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/studentprofile.css";
import ProfileList from "./profileList";

const Profilecard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  

  const [issuestate, setIssuestate] = useContext(issuebooksContext);
  const [studentdata, setStudentdata] = useContext(studentContext);
  const [bookData, setBookData] = useContext(allBooksContext);

  const [count, setcount] = useState(0);
  const [remaininingCount,setRemainingCount] = useState(0)
  const [profileSearch,setProfileSearch] = useState('')

  useEffect(() => {
    let countvar = 0;
    let remaining = 0;
    // count = bookData?.length
    issuestate?.map((studentbook) => {
      if (studentbook?.issuestudentid === id) {
        countvar = countvar + 1
        if(studentbook?.isreturn === true){
          return(remaining = remaining + 1)
        } 
       
      }

    });
    setcount(countvar);
    setRemainingCount(remaining)
  }, [issuestate, id]);
  


  const profileSearchFunc = (e) => {
    const value = e.target.value
    setProfileSearch(value)
    console.log(profileSearch)
  }

  return (
    <Fragment>
      {studentdata.map((object) => {
        if (object.id == id) {
          return (
            <div className="" key={object.id}>
              <div className="profileheader pt-5 ">
                <span className="d-flex">
                  <MdArrowBackIos
                    className="mt-1"
                    onClick={() => navigate(-1)}
                  />
                  <p className="m-0 profilestudent">Students &nbsp; /</p>
                  <p className="m-0 ps-1 profilenameheader">{object.name}</p>
                </span>
                <hr className="hrheader"/>
              </div>

              <div className=" d-flex gap-md-3 profiledetails p-md-4 mt-md-4">
                <div className="cardleft col-8">
                  <p className="cardname">{object.name}</p>
                  <p className="cardmail">{object.email}</p>
                </div>
                <div className="col-3 ps-3 pt-2">
                  <span className="d-flex justify-content-between pe-md-4 flex-wrap">
                    <p className="cardrightdata">Total Books issued </p>
                    <p className="cardrightvalues">{count}</p>
                  </span>
                  <span className="d-flex justify-content-between pe-md-4 flex-wrap">
                    <p className="cardrightdata">Returned Books </p>
                    <p className="cardrightvalues">{remaininingCount}</p>
                  </span>

                  <span className="d-flex justify-content-between flex-wrap">
                    <p className="cardrightdata">Total Fine</p>
                    <p className="cardrightvalues">Rs.70</p>
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className="pt-4">
       

        

        <div className="Allbookstable container  text-center  mt-2 pt-4 pb-5">

        <p className="profileissuedbooks d-flex">Issued Books ( {count} )</p>

        <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
          <div className="mainsearch-div d-flex">
            <input
              className="inputsearch"
              type="text"
              onChange={profileSearchFunc}
              placeholder="Search by book title or author "
            />
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
          </div>
        </div>

          <div className="Allbooks-row row py-3 mt-4  ">
            <div className="col profile-table-headers">Book Title</div>
            <div className="col profile-table-headers">Author</div>
            <div className="col profile-table-headers">Issue Date</div>
            <div className="col profile-table-headers">Due Date</div>
            <div className="col profile-table-headers">Return Date</div>
            <div className="col profile-table-headers ">Fine (Rs. 10 per day)</div>
          </div>
          {issuestate.map((issueobj) => {
            
            if (issueobj.issuestudentid == id) {
              return <ProfileList issueobj={issueobj} profileSearch = {profileSearch} />;
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Profilecard;
