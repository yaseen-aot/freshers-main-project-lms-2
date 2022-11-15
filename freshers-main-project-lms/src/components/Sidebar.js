import { Link } from 'react-router-dom';
import whiteLogo from '../assets/whiteLogo.png'
import { MdTaskAlt } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import '../css/SideBar.css'



const SideBar = () => {
    return ( 

  <div className="SideBar" >
      <div className=''>

        <div className='loginhead d-flex gap-3 pt-4 ps-4 flex-wrap'>
            <img className='whitelogo' src={whiteLogo} alt="logo" />
            <h1 className='mt-2 whitetext'>LMS</h1>
        </div>

        

          <div className='sidebtn  gap-4 ms-md-2 '>

              <Link to= '/issued-page' >
              <button className='sidebuttons  d-flex gap-md-2 align-items-center' > < MdTaskAlt className='sidemd'/>  Issued Books</button>
              </Link>
            
              <Link to= '/all-books' >
              <button className='sidebuttons  d-flex gap-md-2 pe-md-4  align-items-center' > < MdMenuBook className='sidemd'/>  All Books</button>
              </Link>

              <Link to= '/students' >
              <button className='sidebuttons  d-flex gap-md-2 pe-md-4  align-items-center' > < MdOutlinePeopleAlt className='sidemd'/>  Students</button>
              </Link>

          </div>
       </div>
    
  </div> 

     );
}
 
export default SideBar;