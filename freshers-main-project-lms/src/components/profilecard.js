import { useState,useContext, useEffect } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";
import { issuebooksContext } from "../App";
import { Fragment } from "react";
import {MdArrowBackIos, MdEmojiObjects } from "react-icons/md";
import { useNavigate } from "react-router";
import { useParams } from "react-router";


import { AiOutlineSearch } from "react-icons/ai";
import '../css/studentprofile.css'
import ProfileList from "./profileList";


const Profilecard = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)

    
    const  [issuestate,setIssuestate] = useContext(issuebooksContext)
    const [studentdata,setStudentdata] = useContext(studentContext)
    const [bookData,setBookData] = useContext(allBooksContext)
    
     const [count,setcount] = useState(0)

    
    // const countFun = () => {
        
    //     setcountvar( count++)
    //     console.log(countvar)
    // }

    useEffect(()=>{
        let countvar = 0;
        // count = bookData?.length
        issuestate?.map(studentbook =>{
                
                if(studentbook?.issuestudentid === id){
                  return countvar = countvar + 1
                }
        }
            
            )
        setcount(countvar)
    },[issuestate,id])
     console.log(count,"count")


   



    return ( 
        
            <Fragment>
            

            
    { studentdata.map((object) => {

       


        if(object.id == id){
            
        
       
        return(

            
          
        <div className="" key={object.id }>
        
            <div className="profileheader pt-5 ">
            <span className="d-flex">
            <MdArrowBackIos className="mt-1" onClick={()=>navigate(-1)}/>
            <p className="m-0 profilestudent">Students/</p>
            <p className="m-0 profilenameheader">{object.name}</p>
            
            </span>
            <hr/>
            
            </div>

            <div className=" d-flex gap-md-3 profiledetails p-md-4 mt-md-4">
            
            <div className="cardleft col-8">
            <p className="cardname">{object.name}</p>
            <p className="cardmail">{object.email}</p>
            </div>
            <div className="col-3 ps-3 pt-2">
            <span className="d-flex justify-content-between pe-md-4 flex-wrap">
            <p>Total Books issued  </p>
            <p>{count}</p>
            </span>
            <span className="d-flex justify-content-between pe-md-4 flex-wrap">
            <p>Returned Books    </p>
            <p>4</p>
            </span>

            <span className="d-flex justify-content-between flex-wrap">
            <p>Total Fine</p>
            <p>Rs.70</p>
            </span>
            
            </div>
            
            </div>

        </div>
        )
        }
    })}


   
    
    <div className="pt-4">
    <p className="profileissuedbooks">Issued Books ( {count} )</p>
    
    <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
    <div className="mainsearch-div">
        <input className="inputsearch" type="search"  placeholder="Search by book title or author "/>
    </div>
    <div>
        <AiOutlineSearch className="searchicon"/>
    </div>           
    </div>


    
    <div className="Allbookstable container  text-center mt-2 pt-3 pb-5">

        <div className="Allbooks-row row py-3">
            <div className="col head-Allbooks">
            Book Title
            </div>
            <div className="col head-Allbooks">
            Author
            </div>
            <div className="col head-Allbooks">
            Issue Date
            </div>
            <div className="col head-Allbooks">
            Due Date
            </div>
            <div className="col head-Allbooks">
            Return Date
            </div>
            <div className="col head-Allbooks ">
            Fine (Rs. 10 per day) 
            </div>
        </div>
    {issuestate.map((issueobj) => {

   

        // console.log(id,"id")
        // console.log(issueobj.issuestudentid)

        if(issueobj.issuestudentid == id ){

            // console.log("kerii")
           
          
           
            

        return(



       <ProfileList issueobj = {issueobj}/>

        )}
    })}


        </div>
        
    

    
    
    </div>
     </Fragment>

     );
}
 
export default Profilecard;

   
 
        
        


            
            
        