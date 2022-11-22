import { useState,useContext } from "react";
import { studentContext } from "../App";
import { Fragment } from "react";
import {MdArrowBackIos, MdEmojiObjects } from "react-icons/md";
import { useNavigate } from "react-router";
import { useParams } from "react-router";


const Profilecard = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)

    const [studentdata,setStudentdata] = useContext(studentContext)
    




    return ( 
            <Fragment>

            
    { studentdata.map((object) => {
        console.log(object.id,"jjj")
        console.log(id,"her")


        if(object.id == id){
            console.log("keri")
        
       
        return(
          
        <div className="pt-3">
            <div className="py-3">
            <span className="d-flex">
            <MdArrowBackIos className="mt-1" onClick={()=>navigate(-1)}/>
            <p className="m-0">Students/</p>
            <p className="m-0">{object.name}</p>
            
            </span>
            
            </div>

            <div className="d-flex pt-3">
            
            <div className="col-8">
            <h1>{object.name}</h1>
            <p>{object.email}</p>
            </div>
            <div className="col-3">
            <span className="d-flex justify-content-around ">
            <p>Total Books issued  </p>
            <p>5</p>
            </span>
            <span className="d-flex justify-content-around">
            <p>Returned Books    </p>
            <p>4</p>
            </span>

            <span className="d-flex justify-content-around">
            <p>Total Fine</p>
            <p>Rs.70</p>
            </span>
            
            </div>
            
            </div>

        </div>
        )
        }
    })}


     </Fragment>

     );
}
 
export default Profilecard;

   
 
        
        


            
            
        