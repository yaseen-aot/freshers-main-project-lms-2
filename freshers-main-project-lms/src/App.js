import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import IssuedPage from './pages/IssuedPage';
import 'bootstrap/dist/css/bootstrap.min.css';




import Login from "./pages/Login";
import SideBar from './components/Sidebar';
import Studentmain from './pages/Studentmain';
import Student from './pages/Students';
import AllBooks from './pages/Allbooks';
import AllMain from './pages/Allbooks-main';
import IssueMain from './pages/Issued-main';








function App() {

  const [formSubmitted,setFormSubmitted] = useState(false)

    
  const submitForm = () => {
    setFormSubmitted(true)
    console.log("hhh")
}
  
  return (
    <div className="App ">
        <Router>
    
       




    <Routes>

    <Route exact
     path='/' element = {!formSubmitted ? (<Login submitForm = {submitForm} />
    ) : (
        <IssueMain/>
    )
    } />



   
    <Route path='/issuedpage' element={<IssueMain/>} />
    <Route path='/Students' element = {<Student/>}/>
    <Route path='/Allbooks' element = {<AllMain/>}/>






    </Routes>


    </Router>
    


    </div>
  );
}

export default App;
// <div className='App-div-first d-flex gap-md-5 '>

 
