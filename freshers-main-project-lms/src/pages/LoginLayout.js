
import {  useState } from 'react';

import '../css/Logindetails.css'
import LogValidate from '../components/LoginValidation';
import LogoComponent from '../components/LoginLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";








const Login = ({submitForm,admindetails,setobject}) => {

 
  const [studentdata,setStudentdata] = useContext(studentContext)
  const [bookData,setBookData] = useContext(allBooksContext)
 

    const[values,setValues] = useState(
        {
            email : "",
            password : ""
        }
    )


   
    const[errors,setErrors] = useState({})
    
    const[studentpage,setStudentpage] = useState(false)

    const studentClick = () => {
        setStudentpage(true)
        console.log(studentpage)
    }

    const adminClick = () => {
      setStudentpage(false)
        console.log(studentpage)
    }

  


    const checkMatch = () => {
      console.log(values)
      if (values.email === admindetails.email && values.password === admindetails.password)
      {
        setobject()
        console.log("Logged In")
        submitForm()     
      }else{
        console.log("Do not match")
      }

    }


    const onLoginInput = (e) =>{
      setValues({
          ...values,
          [e.target.name] : e.target.value}
         
      )
      console.log(values)
  }

  const ToastFunc = () => {
    toast.error('oops !! cannot login', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
   
    const onlogin = (e) =>{
        e.preventDefault();
        setErrors(LogValidate(values))
        checkMatch()
        ToastFunc()
       
    }

    const studentlogin = (e) => {
      e.preventDefault();
       console.log('success')
        
      
    }



    return ( 

       <div className="loginmain ms-3 mt-3 " >
        
       <div className='pt-3 ps-2'>
       <LogoComponent/>
       </div>


      
     

        <div className="d-flex flex-row align-items-center justify-content-center  " style ={{height : "500px"}}>

      
        <div>
        

        <div className=''>
      
       
            <p className='logintext'>Login </p>
            <p className='welcometext'>Welcome back! Please enter your details.</p>

            <ul className='admin-student d-flex gap-3 m-0 px-0 ' >
            
            <button  style={{ borderBottom: !studentpage ? '2px solid red' : 'none'}}  className='adminbtn ' onClick={adminClick}>Admin</button>
            

            <button style={{ borderBottom: studentpage ? '2px solid red' : 'none'}}  className='studentbtn' onClick={studentClick}>Student</button>

            </ul>
            

            

        </div>

            <form >

  <div className="Login-divider"></div>
  <div className="login-form mt-2">
 
  
  
    <label>Email</label>
    <div className="field">
    <input
    className='login-input mt-2'
      type="text"
      name="email"
      placeholder="Enter your email"
      value={values.email}
      onChange = {onLoginInput}
     
    />
  </div>
  {errors.email && <p className='errormsg'>{errors.email}</p>}
 
    <label className='mt-3'>Password</label>
    <div className="field">
    <input
    className='login-input mt-2'
      type="password"
      name="password"
      placeholder="Enter your Password"
      value={values.password}
      onChange = {onLoginInput}
 
    />
  </div>
  {errors.password && <p className='errormsg'>{errors.password}</p>}
 
  <button className='login-button mt-4'
  onClick={(e) => {studentpage ? studentlogin(e) : onlogin(e)}}
  >Login</button>

  {studentpage && <p className='m-0'>Don't have an account? Register</p>}
</div>
</form>

  </div>
     </div>

     <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  />
  {/* Same as */}
<ToastContainer />

      </div>
     );
}
 
export default Login;