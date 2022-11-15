import React from 'react';
import { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import IssuedPage from './components/IssuedPageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';






import Login from "./pages/LoginLayout";
import SideBar from './components/Sidebar';
import Studentmain from './components/StudentComponent';
import Student from './pages/StudentsLayout';

import AllMain from './pages/AllbooksLayout';
import IssueMain from './pages/IssuePageLayout';

export const studentContext = createContext();








function App() {

  
  const [formSubmitted,setFormSubmitted] = useState(false)
  const [studentdata,setStudentdata] = useState([
  {
    id : 1,
    name: "ggg",
    email: "fvf",
    password : "hggg" ,
    position : 'student'
  },
  {
    id : 2,
    name: "g33gg",
    email: "fvf",
    password : "hggg" ,
    position : 'student'
  },
  {
    id : 3,
    name: "ggg",
    email: "fvfd",
    password : "hggsg" ,
    position : 'studendt'
  }

])

    
  const submitForm = () => {
    setFormSubmitted(true)
    console.log("hhh")
}

const admindetails =  {
  email : "yasin@2003",
  password : "12345"
}

const setobject = () => localStorage.setItem("Admin",JSON.stringify(admindetails))
 const getobject = () => localStorage.getItem(admindetails)

  
  return (
    <studentContext.Provider value={[studentdata,setStudentdata]}>
    <div className="App ">
        <Router>
    
    <Routes>

    <Route exact
     path='/' element = {!formSubmitted ? (<Login submitForm = {submitForm} setobject = {setobject}  admindetails = {admindetails}/>
    ) : (
        <IssueMain/>
    )
    } />



   
    <Route path='/issued-page' element={<IssueMain/>} />
    <Route path='/students' element = {<Student/>}/>
    <Route path='/all-books' element = {<AllMain/>}/>






    </Routes>


    </Router>
    


    </div>
    </studentContext.Provider>
  );
}

export default App;
// <div className='App-div-first d-flex gap-md-5 '>

 
