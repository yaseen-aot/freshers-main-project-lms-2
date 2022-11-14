
import {  useState } from 'react';
import { Link } from 'react-router-dom';


import LogValidate from '../components/LoginValidation';
import LogoComponent from '../components/logo';







const Login = ({submitForm}) => {

  

    const[values,setValues] = useState(
        {
            email : "",
            password : ""
        }
    )

    const admindetails = {
      email : "yasin@2003",
      password : "12345"
    }


    
    const[errors,setErrors] = useState({})
    
   


    const checkMatch = () => {
      console.log(values)
      if (values.email === admindetails.email && values.password === admindetails.password)
      {
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
  }
   
    const onlogin = (e) =>{
        e.preventDefault();
        setErrors(LogValidate(values))
        checkMatch()
          
    }


    return ( 

       <div className="loginmain ms-3 mt-3 " >
        
       <div className='pt-3 ps-2'>
       <LogoComponent/>
       </div>
      
     

        <div className="d-flex flex-row align-items-center justify-content-center  " style ={{height : "500px"}}>

      
        <div>
        

            <div >
            <p>Login </p>
            <p>Welcome back! Please enter your details.</p>

            <ul className='admin-student d-flex gap-3 m-0 px-0 pb-2' >
            <Link to= '/AdminLogin'>
            <li>Admin</li>
            </Link>
           
            <Link to= '/StudentLogin'>
            <li>Student</li>
            </Link>
           
            </ul>
            </div>

            <form >

<div className="Login-divider"></div>
<div className="login-form">
 
  
  
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
  onClick={onlogin}
  >Login</button>
</div>
</form>

  </div>
     </div>
      </div>
     );
}
 
export default Login;