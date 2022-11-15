import { Link } from "react-router-dom";
import '../css/Logindetails.css'


const LoginHead = () => {
    return ( 

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

     );
}
 
export default LoginHead;