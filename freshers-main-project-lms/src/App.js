import React, { useEffect } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import StudentProfile from "./pages/StudentProfile";
import Login from "./pages/LoginLayout";

import Student from "./pages/StudentsLayout";

import AllMain from "./pages/AllbooksLayout";
import IssueMain from "./pages/IssuePageLayout";
import MyBooks from "./pages/MyBooks";
import StudentAllBooks from "./pages/StudentAllBooks";

export const studentContext = createContext();
export const allBooksContext = createContext();
export const issuebooksContext = createContext();
export const sidebarCustomizeContext = createContext();

// const localStorageAdmin = () => {
//   let admindetail = localStorage.getItem('admindetails')
//   console.log(admindetail,"yyyy")
// }

const localStorageStudent = () => {
  let Studentarr = localStorage.getItem("studentdata");
  console.log(Studentarr);

  if (Studentarr) {
    return JSON.parse(localStorage.getItem("studentdata"));
  } else {
    return [];
  }
};

const localStorageAllBooks = () => {
  let Allbooksarr = localStorage.getItem("bookData");
  console.log(Allbooksarr);

  if (Allbooksarr) {
    return JSON.parse(localStorage.getItem("bookData"));
  } else {
    return [];
  }
};

const localStorageIssueBooks = () => {
  let Issuebooksarr = localStorage.getItem("issuestate");
  console.log(Issuebooksarr);

  if (Issuebooksarr) {
    return JSON.parse(localStorage.getItem("issuestate"));
  } else {
    return [];
  }
};



function App() {

  // const getStudentLogin = ()=>{
  //   return localStorage.getItem("studentLogin")
  // }
  // const [studentBoolean, setstudentBoolean] = useState(getStudentLogin());

  // useEffect(() => { 
  //localStorage.setItem("studentLogin", studentBoolean)
  // },[studentBoolean])

 
  const sidebarcustomFunc = () =>{
    return localStorage.getItem("sidebarcustom")
   }
  
  const [sidebarCustomize,setSidebarCustomize]= useState(sidebarcustomFunc());

  useEffect(() => {
    localStorage.setItem("sidebarcustom",sidebarCustomize)
    
  }, [sidebarCustomize])


  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [studentLogin,setStudentLogin] = useState(false)
  const [studentdata, setStudentdata] = useState(localStorageStudent());


  const [bookData, setBookData] = useState(localStorageAllBooks());

  const [issuestate, setIssuestate] = useState(localStorageIssueBooks());

  const [studentidget,setStudentIdGet] = useState('')

  // useEffect(() =>{
  //   const data = window.localStorage.getItem('sidebarcustom');
  //   if(data !== null) setSidebarCustomize(JSON.parse(data))
  // }, [])


  useEffect(() => {
    // localStorage.setItem("Admin",JSON.stringify(admindetails))
    localStorage.setItem("studentdata", JSON.stringify(studentdata));
    localStorage.setItem("bookData", JSON.stringify(bookData));
    localStorage.setItem("issuestate", JSON.stringify(issuestate));
    
  }, [studentdata, bookData, issuestate]);

  const submitForm = () => {
    setFormSubmitted(true);
  };

  // const studentSubmit = () => {
  //   setStudentLogin(true)
  //   console.log(studentLogin)
  // } 

  


  const admindetails = {
    email: "yasin@2003",
    password: "12345",
  };


  return (
    <sidebarCustomizeContext.Provider value={[sidebarCustomize,setSidebarCustomize]}>
    <issuebooksContext.Provider value={[issuestate, setIssuestate]}>
      <allBooksContext.Provider value={[bookData, setBookData]}>
        <studentContext.Provider value={[studentdata, setStudentdata]}>
          <div className="App ">
            <Router>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    !formSubmitted ? (
                      <Login
                        submitForm={submitForm}
                        admindetails={admindetails}
                        setStudentIdGet = {setStudentIdGet}
                        studentidget = {studentidget}
                      />
                    ) : (
                      <IssueMain />
                    )
                  }
                />

               

                <Route path="/issued-books" element={<IssueMain />} />
                <Route path="/all-books" element={<AllMain />} />
                <Route path="/students" element={<Student />} />
                <Route path="/students/:id" element={<StudentProfile />} />
                <Route path="/mybooks" element = {<MyBooks studentidget = {studentidget} />}/>
                <Route path="/student-allbooks" element = {<StudentAllBooks/>}/>
              </Routes>
            </Router>
          </div>
        </studentContext.Provider>
      </allBooksContext.Provider>
    </issuebooksContext.Provider>
    </sidebarCustomizeContext.Provider>
  );
}

export default App;
// <div className='App-div-first d-flex gap-md-5 '>
// localStorage.setItem("sidebarcustom",JSON.stringify(sidebarCustomize))
// sidebarCustomize