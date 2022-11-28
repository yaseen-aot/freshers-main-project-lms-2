import { Link } from "react-router-dom";
import whiteLogo from "../assets/whiteLogo.png";
import { MdTaskAlt } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import "../css/SideBar.css";
import { useContext } from "react";
import { sidebarCustomizeContext } from "../App";



const SideBar = () => {

  const [sidebarCustomize,setSidebarCustomize]= useContext(sidebarCustomizeContext)
  console.log(sidebarCustomize,"sidebar")


  return (
    <div className="SideBar" style={{backgroundColor : sidebarCustomize ? "#303179": "#ed7966"}}>
      <div className="">
        <div className="loginhead d-flex gap-3 pt-4 ps-4 flex-wrap">
          <img className="whitelogo" src={whiteLogo} alt="logo" />
          <h1 className="mt-2 whitetext">LMS</h1>
        </div>

        <div  className ="sidebtn gap-4 ms-md-1"   >

       {sidebarCustomize && <Link to="/mybooks">
  
            <button className="sidebuttons  d-flex gap-md-2 ps-md-3 p-md-2 " style={{backgroundColor : sidebarCustomize ? "#303179" : "#ed7966"}}>
              {" "}
              <MdTaskAlt className="sidemd" /> My Books
            </button>
          </Link>}

          <Link to="/issued-books">
            <button className="sidebuttons  d-flex gap-md-2 ps-md-3 p-md-2 " style={{backgroundColor : sidebarCustomize ? "#303179" : "#ed7966" }}>
              {" "}
              <MdTaskAlt className="sidemd" /> Issued Books
            </button>
          </Link>

          {!sidebarCustomize && <Link to="/all-books">
            <button className="sidebuttons  d-flex gap-md-2 ps-md-3  p-md-2">
              {" "}
              <MdMenuBook className="sidemd" /> All Books
            </button>
          </Link>}

          {!sidebarCustomize && <Link to="/students">
            <button className="sidebuttons  d-flex gap-md-2  ps-md-3  p-md-2">
              {" "}
              <MdOutlinePeopleAlt className="sidemd" /> Students
            </button>
          </Link>}

        </div>
      </div>

   
    </div>
  );
};

export default SideBar;

// <div className="bottomdiv d-flex  gap-md-2  pt-3 mx-3">
// <BsPersonCircle className="align-md-self-center" size={30}/>
//   <div className="" >
//   <p className="m-0">Mayor Smith</p>
//   <p className="m-0">mayorsmith@gmail.com</p>
//   </div>
// </div>
