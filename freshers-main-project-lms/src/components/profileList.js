
import { Fragment, useState } from 'react';
import { useContext,useEffect } from 'react';
import { allBooksContext } from '../App';
import '../css/studentprofile.css'


const ProfileList = ({issueobj}) => {

    const [bookData,setBookData] = useContext(allBooksContext)

    const [profileDayDiff,setProfileDayDiff] = useState(null)




    
    var currentDueDate = new Date(issueobj?.duedate);
    console.log(issueobj,"issueobj")
    var Duemonth = currentDueDate.getMonth() + 1;
    var Duedate = currentDueDate.getDate();
    var Dueyear = currentDueDate.getFullYear();
    const dueddatedisplay =  Duedate + "-"+  Duemonth + "-" + Dueyear
    console.log(issueobj,"ttty")


    useEffect(() => {
        // const today = new Date()
        // const todaymonth = today.getMonth() + 1
        // const todayDate = today.getDate()
        // const todayYear = today.getFullYear()
        // const currentday = today.getDate()+"-"+ todaymonth + "-" + today.getFullYear()
  
        var date1 = new Date();
        var date2 = new Date(Duemonth + "-" + Duedate + "-" + Dueyear)
        console.log(date1,date2,"yess")

        if(date1 > date2 ){

        var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
        setProfileDayDiff(diffDays)
        console.log(profileDayDiff,"ttt")

    
     
}},[issueobj])

    
    return ( 

        <div className="Allbooks-row row py-3" key={issueobj.Issueid}>

        {bookData.map((bookobj) =>{
            console.log(bookobj.bookid,'booktitle')
            console.log(issueobj.issuebookid,'hyjy')
            if(bookobj.bookid == issueobj.issuebookid){
                
                
                console.log("iivdemm")
            return(
            <Fragment>
            <div className="col head-Allbooks">
            {bookobj.title}
            </div>
            <div className="col head-Allbooks">
            {bookobj.author}
            </div>
            </Fragment>
         )}
         })}
         
            <div className="col head-Allbooks">
            {issueobj.issuedate}
            </div>
            <div className="col head-Allbooks">
             {dueddatedisplay}
            </div>
            <div className="col head-Allbooks">
            {!issueobj.isreturn ? '-' : issueobj.isreturndate}
            </div>
            <div className="col head-Allbooks">
           {profileDayDiff ? profileDayDiff * 10 : "0" }
            </div>
        </div>



     );
}
 
export default ProfileList;