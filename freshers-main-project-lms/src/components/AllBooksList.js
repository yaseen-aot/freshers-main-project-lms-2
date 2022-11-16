import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext,  useState } from "react";
import { allBooksContext } from "../App";
import DeleteModalAllbooks from "../Modals/DeleteModalAllbook";

const AllBooksList = ({Allbookssearchdata}) => {
    const [bookData,setBookData] = useContext(allBooksContext)
    const [allbookkeyelement,setAllbookkeyelement] = useState('')
    const [showbookDelete, setShowbookDelete] = useState(false);

  

    


    const handleShowDeleteBook = () => setShowbookDelete(true);

   

    const allBookGetkey = (deletebook) => {
      
        setAllbookkeyelement(deletebook)
        console.log(allbookkeyelement , 'd')
    }
    

    return ( 

        <div>
        <DeleteModalAllbooks showbookDelete = {showbookDelete} setShowbookDelete = {setShowbookDelete} allbookkeyelement = {allbookkeyelement}/>
       {bookData?.filter(data => (data.title || data.author).toLowerCase()
        .includes(Allbookssearchdata))
        .map((item) => 
       
        <div className="Allbooks-row row py-2" key={item.bookid}>
        {console.log(item)}
                <div className="col Allbooks-content">
                {item.title}
                </div>
                <div className="col Allbooks-content">
                {item.author}
                </div>
                <div className="col Allbooks-content">
                {item.language}
                </div>
                <div className="col Allbooks-content">
                {item.totalcopies}
                </div>
                <div className="col Allbooks-content">
                {item.remaining}
                </div>
                <div className="col Allbooks-content ">
                <MdModeEditOutline className="Allbooks-edit me-md-2"/>
                <RiDeleteBin6Line className="Allbooks-delete"  onClick={() =>{ handleShowDeleteBook() ; allBookGetkey(item.bookid)} }/> 
                </div>
            </div>
            
    )}

        </div>
     );
}
 
export default AllBooksList;