import ReactTooltip from "react-tooltip";
import {MdOutlineAssignmentReturn} from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { allBooksContext, studentContext } from "../App";




const IssueBookList = ({issueobj,returnGetkey,handleReturnShow}) => {

    const [studentdata,setStudentdata] = useContext(studentContext)
    const [bookData,setBookData] = useContext(allBooksContext)
    const [dayDiff,setDayDiff] = useState()

    console.log(issueobj,"hen")

    var currentDt = new Date(issueobj?.issuedate);
    var mm = currentDt.getMonth() + 1;
    var dd = currentDt.getDate();
    var yyyy = currentDt.getFullYear();
    const issueddate =  dd + "-"+  mm+ "-" + yyyy
    // const issueddate = issueobj.issuedate.getDate()+"-"+ issueobj.issuedate.getMonth()+1 + "-" + issueobj.issuedate.getFullYear()
    console.log(issueddate)



    var dueDt = new Date(issueobj?.duedate);
    console.log(issueobj,"issueobj")
    var mmdue = dueDt.getMonth() + 1;
    var dddue = dueDt.getDate();
    var yyyydue = dueDt.getFullYear();
    const dueddate =  dddue + "-"+  mmdue+ "-" + yyyydue
    console.log(issueobj,"ttty")



    useEffect(() => {
        const today = new Date()
        const todaymonth = today.getMonth() + 1
        const todayDate = today.getDate()
        const todayYear = today.getFullYear()
        const currentday = today.getDate()+"-"+ todaymonth + "-" + today.getFullYear()
  
        var date1 = new Date();
        var date2 = new Date(mmdue + "-" + dddue + "-" + yyyydue)
        console.log(date1,date2,"yess")

        if(date1 > date2 ){

            
    
     var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
    setDayDiff(diffDays)
    console.log(diffDays,"ttt")

    
     
}},[issueobj])


    return ( 

       

        <div className="Issuepage-row row py-2" key={issueobj.Issueid }>
            
        {bookData?.map((bookobj) => {
            console.log(bookobj.remaining,"huy")
            
            if(issueobj.issuebookid === bookobj.bookid){
                
               
                return(
            <div className="col Issuepage-content">
           {bookobj.title}
            </div>
             ) 
                
            }})}
             
            {studentdata?.map((studentobj) => {
             

                if(  issueobj.issuestudentid == studentobj.id ){
                   console.log('hiuh')
             return(

            <div className="col Issuepage-content">
            {studentobj.name}
            </div>
            ) 
             } })}

            <div className="col Issuepage-content">
            {issueddate}
            </div>

            <div className="col Issuepage-content">
            {dueddate}
            </div>

            <div className="col Issuepage-content">
              {dayDiff ? dayDiff * 10 : "0"}
            </div>

            <div className="col Issuepage-content">
            <button className="returnbutton" data-tip data-for="returntooltip" onClick={() => {handleReturnShow();returnGetkey(issueobj.Issueid)}}>
            <MdOutlineAssignmentReturn className="Issuepage-return"/>
            </button>
            <ReactTooltip id="returntooltip" place="top" effect="solid" >
            Mark as returned
            </ReactTooltip>
            </div>

        </div>



     );
}
 
export default IssueBookList;