import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext,  useState } from "react";
import { allBooksContext } from "../App";
import DeleteModalAllbooks from "../Modals/DeleteModalAllbook";
import AddBookModal from "../Modals/AddBookModal";

const AllBooksList = ({Allbookssearchdata,allbooksEditKey,setAllbooksEditKey,ModalShowAddBook}) => {
    const [bookData,setBookData] = useContext(allBooksContext)
    const [allbookkeyelement,setAllbookkeyelement] = useState('')

    const [showbookDelete, setShowbookDelete] = useState(false);

    const [AllbookseditTitle,setAllbookseditTitle] = useState('')
    const [AllbookseditAuthor,setAllbookseditAuthor] = useState('')
    const [AllbookseditLanguage,setAllbookseditLanguage] = useState('')
    const [AllbookseditTotalcopies,setAllbookseditTotalcopies] = useState('')
    const [AllbookseditRemaining,setAllbookseditRemaining] = useState('')

    const AllbookEditGet = () => {
        setAllbooksEditKey(true)
    }
    const AllbooksEditTitleget = (data) => {
        setAllbookseditTitle(data)
        console.log(AllbookseditTitle,"ddmm")
    }
    const AllbooksEditAuthorget = (data) => {
        setAllbookseditAuthor(data)
        console.log(AllbookseditAuthor,"ddmm")
    }
    const AllbooksEditLanguageget = (data) => {
        setAllbookseditLanguage(data)
        console.log(AllbookseditLanguage,"ddmm")
    }
    const AllbooksEditTotalcopiesget = (data) => {
        setAllbookseditTotalcopies(data)
        console.log(AllbookseditTotalcopies,"ddmm")
    }
    const AllbooksEditRemainingget = (data) => {
        setAllbookseditRemaining(data)
        console.log(AllbookseditRemaining,"ddmm")
    }


  

    


    const handleShowDeleteBook = () => setShowbookDelete(true);

   

    const allBookGetkey = (deletebook) => {
      
        setAllbookkeyelement(deletebook)
        console.log(allbookkeyelement , 'd')
    }
    

    return ( 

        <div>
        <DeleteModalAllbooks showbookDelete = {showbookDelete} setShowbookDelete = {setShowbookDelete} />

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
                <MdModeEditOutline className="Allbooks-edit me-md-2" 
                onClick={()=> {
                    ModalShowAddBook()
                    AllbookEditGet();
                    AllbooksEditTitleget(item.title) ;
                    AllbooksEditAuthorget(item.author);
                    AllbooksEditLanguageget(item.language);
                    AllbooksEditTotalcopiesget(item.totalcopies)
                    AllbooksEditRemainingget(item.remaining)

                }} />

                <RiDeleteBin6Line className="Allbooks-delete"  onClick={() =>{ handleShowDeleteBook() ; allBookGetkey(item.bookid)} }/> 
                </div>
            </div>
            
    )}
                <AddBookModal allbooksEditKey = {allbooksEditKey} AllbookseditTitle = {AllbookseditTitle}
                AllbookseditAuthor = {AllbookseditAuthor}  AllbookseditLanguage = {AllbookseditLanguage}
                AllbookseditTotalcopies = {AllbookseditTotalcopies} AllbookseditRemaining = {AllbookseditRemaining} />
        </div>
     );
}
 
export default AllBooksList;