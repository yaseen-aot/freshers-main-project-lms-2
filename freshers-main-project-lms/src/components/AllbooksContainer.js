import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddBookModal from "../Modals/AddBookModal";
import AllBooksList from "./AllBooksList";

const AllBooks = () => {
    const [Allbookssearchdata,setAllbookssearchdata] = useState('')
    const [showAddBook, setShowAddBook] = useState(false);

    const[allbooksEditKey,setAllbooksEditKey] = useState(false)
    

    const allBooksResetEdit =  () => {
        setAllbooksEditKey(false)
    }

    const ModalShowAddBook = () => setShowAddBook(true);

    const allBooksSearchFunction = (event) => {
        const value = event.target.value
        setAllbookssearchdata(value)
        console.log(Allbookssearchdata)

    }
    
    return ( 

        

    <div className="div-main ">
        
            <AddBookModal showAddBook = {showAddBook}  setShowAddBook = {setShowAddBook} allbooksEditKey = {allbooksEditKey} />
            <p className="main-header pt-5">All Books</p>
            <hr/>

        <div className="search-btn d-flex flex-wrap ">
        
            <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">
                <div className="mainsearch-div">
                <input className="inputsearch" type="text"  placeholder="Search by book title or author "  onChange={allBooksSearchFunction} value={Allbookssearchdata}/>
                </div>
            
                <div>
                <AiOutlineSearch className="searchicon"/>
                </div>   
            </div>

            <button className="main-button mt-2"  onClick={() => {ModalShowAddBook();allBooksResetEdit()}}> Add New Book</button>
        </div>
        

        <div className="Allbookstable container  text-center mt-5 pt-3 pb-5">

            <div className="Allbooks-row row py-3">
                <div className="col head-Allbooks">
                Book Title
                </div>
                <div className="col head-Allbooks">
                Author
                </div>
                <div className="col head-Allbooks">
                Language
                </div>
                <div className="col head-Allbooks">
                Total Copies
                </div>
                <div className="col head-Allbooks">
                Remaining
                </div>
                <div className="col head-Allbooks">
                Actions 
                </div>
            </div>

            
        
           <AllBooksList Allbookssearchdata = {Allbookssearchdata} allbooksEditKey = {allbooksEditKey}
            setAllbooksEditKey = {setAllbooksEditKey} ModalShowAddBook = {ModalShowAddBook}/> 
            
            

        </div>


    </div>

     );
}
 
export default AllBooks;