import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import AddBookModal from "../Modals/AddBookModal";


const AllBooks = ({handleShow}) => {

    

    


    return ( 

        <div className="div-main mt-3">
        
        <p className="main-header">All Books</p>
        <hr/>

        <div className="search-btn d-flex flex-wrap ">
        
        

        <div className="search-main-icon col-md-6 col-11 d-flex justify-content-around align-items-center mt-2">

        <div className="mainsearch-div">
        <input className="inputsearch" type="text"  placeholder="Search by book title or author "/>
        </div>
        <div>
        <AiOutlineSearch className="searchicon"/>
        </div>
        
        </div>

        <button className="main-button mt-2"  onClick={handleShow}> Add New Book</button>
        </div>
        

        <div>
        
        <div className="Allbooks-table d-flex mx-md-3 mt-5 p-md-3 justify-content-between ">
        <span className="head-Allbooks col-2">Book Title</span>
        <span className="head-Allbooks col-2">Author</span>
        <span className="head-Allbooks col-1">Language</span>
        <span className="head-Allbooks col-1">Total Copies</span>
        <span className="head-Allbooks col-1">Remaining</span>
        <span className="head-Allbooks col-1">Actions</span>
        </div>
        
        <div className="Allbooks-row d-flex mx-md-3  p-md-3 justify-content-between ">
        <span className="Allbooks-content col-2">It Start With Us</span>
        <span className="Allbooks-content col-2">Colleen Hoover</span>
        <span className="Allbooks-content col-1">English</span>
        <span className="Allbooks-content col-1">5</span>
        <span className="Allbooks-content col-1">2</span>
        <span className="Allbooks-content col-1  d-flex gap-md-2 p-0 mt-1">
        <MdModeEditOutline className="Allbooks-edit"/>
        <RiDeleteBin6Line className="Allbooks-delete"/>
        
        
        
        </span>
        </div>

        </div>
       
        
        </div>



     );
}
 
export default AllBooks;