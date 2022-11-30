import SideBar from "../components/Sidebar";
import MyBooksContainer from "../components/MyBooksContainer";
import '../css/StudentPage.css'


const MyBooks = () => {
    return ( 
        <div className="mybooks-page d-flex gap-md-4  ">
      <div className="sidebar-div col-3 col-md-2 sticky-top">
        <SideBar />
      </div>

      <div className=" col-9  ">
        <MyBooksContainer />
      </div>
    </div>
     );
}
 
export default MyBooks;