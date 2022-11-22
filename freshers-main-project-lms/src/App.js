import React, { useEffect } from 'react';
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
export const issuebooksContext = createContext();


// const localStorageAdmin = () => {
//   let admindetail = localStorage.getItem('admindetails')
//   console.log(admindetail,"yyyy")
// }

const localStorageStudent = () => {
  let Studentarr = localStorage.getItem('studentdata')
  console.log(Studentarr)

  if(Studentarr){
    return JSON.parse(localStorage.getItem('studentdata'))
  }else{
    return [];
  }


}

const localStorageAllBooks = () => {
  let Allbooksarr = localStorage.getItem('bookData')
  console.log(Allbooksarr)

  if(Allbooksarr){
    return JSON.parse(localStorage.getItem('bookData'))
  }else{
    return [];
  }


}

const localStorageIssueBooks = () => {
  let Issuebooksarr = localStorage.getItem('issuestate')
  console.log(Issuebooksarr)

  if(Issuebooksarr){
    return JSON.parse(localStorage.getItem('issuestate'))
  }else{
    return [];
  }


}





function App() {

  

  
  const [formSubmitted,setFormSubmitted] = useState(false)
  const [studentdata,setStudentdata] = useState(localStorageStudent());
    
// {id: 1669012016763, name: 'sinto pp', email: 'sinto@134', password: 'sinto', position: 'student'},


// {id: 1669012044600, name: 'gg', email: 'ddd', password: 'gg', position: 'student'}
    // {
      
    //     id : 11,
    //     name: "g33gg",
    //     email: "fvf",
    //     password : "hggg" ,
    //     position : 'student'
      
    // }
  

const [bookData,setBookData] = useState(localStorageAllBooks())
 
  // {bookid: 'AC4mPEVI8zz4cE0TN1adN', title: 'rfrefrgfterg', author: 'tvgv', language: 'Malayalam', totalcopies: 6,remaining : 3},
  // {bookid: 'rrrfrN', title: 'fterg', author: 'tvgv', language: 'Malayalam', totalcopies: 6,remaining :3},
  
const [issuestate,setIssuestate] = useState(localStorageIssueBooks())
 
useEffect(() => {
  // localStorage.setItem("Admin",JSON.stringify(admindetails))
  localStorage.setItem("studentdata",JSON.stringify(studentdata))
  localStorage.setItem("bookData",JSON.stringify(bookData))
  localStorage.setItem("issuestate",JSON.stringify(issuestate))

}, [studentdata,bookData,issuestate]);


    
  const submitForm = () => {
    setFormSubmitted(true)
    console.log("hhh")
}

const admindetails =  {
  email : "yasin@2003",
  password : "12345"
}


 

  
  return (
    <issuebooksContext.Provider value={ [issuestate,setIssuestate]}>
    <allBooksContext.Provider value={[bookData,setBookData]} >
    <studentContext.Provider value={[studentdata,setStudentdata]}>
    <div className="App ">
        <Router>
    
    <Routes>

    <Route exact
     path='/' element = {!formSubmitted ? (<Login submitForm = {submitForm}   admindetails = {admindetails}/>
    ) : (
        <IssueMain/>
    )
    } />



   
    <Route path='/issued-books' element={<IssueMain/>} />
    <Route path='/all-books' element = {<AllMain/>}/>
    <Route path='/students' element = {<Student/>}/>
     <Route path='/profile' element = {<StudentProfile/>}/>


    
   






    </Routes>


    </Router>
    


    </div>
    </studentContext.Provider>
    </allBooksContext.Provider>
    </issuebooksContext.Provider>
  );
}

export default App;
// <div className='App-div-first d-flex gap-md-5 '>

 
