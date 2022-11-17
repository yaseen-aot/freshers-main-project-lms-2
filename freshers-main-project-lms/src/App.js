import React from 'react';
import { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';





import StudentProfile from './pages/StudentProfile';
import Login from "./pages/LoginLayout";


import Student from './pages/StudentsLayout';

import AllMain from './pages/AllbooksLayout';
import IssueMain from './pages/IssuePageLayout';

export const studentContext = createContext();
export const allBooksContext = createContext();








function App() {

  

  
  const [formSubmitted,setFormSubmitted] = useState(false)
  const [studentdata,setStudentdata] = useState([
    {
      
        id : 2,
        name: "g33gg",
        email: "fvf",
        password : "hggg" ,
        position : 'student'
      
    }
  ])

const [bookData,setBookData] = useState([
  {
    bookid : 1 ,
    title : 'rfrfref',
    author : 'hyhjuj',
    language : 'ede',
    totalcopies : 4,
    remaining : 3
 },
 {
  bookid : 2 ,
  title : 'ymuy',
  author : 'wssw',
  language : 'uihiu',
  totalcopies : 9,
  remaining : 2
},
{
  bookid : 3 ,
  title : 'ffrrry',
  author : 'gtgtw',
  language : 'uoooou',
  totalcopies : 7,
  remaining : 9
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
 //const getobject = () => localStorage.getItem(admindetails)

  
  return (
    <allBooksContext.Provider value={[bookData,setBookData]} >
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
    <Route path='/all-books' element = {<AllMain/>}/>
    <Route path='/students' element = {<Student/>}/>
     <Route path='/profile' element = {<StudentProfile/>}/>


    
   






    </Routes>


    </Router>
    


    </div>
    </studentContext.Provider>
    </allBooksContext.Provider>
  );
}

export default App;
// <div className='App-div-first d-flex gap-md-5 '>

 
