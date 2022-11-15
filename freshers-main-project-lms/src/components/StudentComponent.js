import { useState,useContext } from "react";
import { studentContext } from "../App";
import AddStudentModal from "../Modals/AddStudentModal";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";



const Studentmain = () => {
    const [studentdata,setStudentdata] = useContext(studentContext)
    const [show, setShow] = useState(false);

    const handleShowStudent = () => setShow(true);

    const studentDeleteFunc = (deleteid) => {
        console.log(deleteid)
        setStudentdata (studentdata.filter((item) => deleteid != item.id   ))
    }


    return ( 

        <div className="div-main ">
            <AddStudentModal show={show} setShow = {setShow}/>
            <p className="main-header pt-5">Students</p>
            <hr/>

            <div className="search-btn d-flex flex-wrap ">
            
                <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
                    <div className="mainsearch-div">
                        <input className="inputsearch" type="text"  placeholder="Search by student name or email"/>
                    </div>
                    <div>
                        <AiOutlineSearch className="searchicon"/>
                    </div>               
                </div>

                <button onClick={handleShowStudent} className="main-button mt-2"> Add New Student</button>
            </div>
            

           

           
            <div className="container text-center  mt-5 ">

            <div className="student-row row py-3">
                <div className="col head-student " >
                Name
                </div>
                <div className="col  head-student">
                Email
                </div>
                <div className="col head-student ">
                Actions
                </div>  
            </div>
        
        
            {studentdata.map((item)=> 
            <div className="student-row text-center row py-2" key={item.id}>

                <div className="col student-content ">
                {item.name}
                </div>

                <div className="col student-content  ">
                {item.email}
                </div>

                <div className="col student-content d-flex align-content-center">
                <MdModeEditOutline className="Student-edit"/>
                <RiDeleteBin6Line className="Student-delete"onClick={() => studentDeleteFunc(item.id)}/>
                <AiOutlineEye className="Student-eye"/>
                </div>

            </div>
            )}
        
        </div>

        
        
        
        </div>


     );
}
 
export default Studentmain;