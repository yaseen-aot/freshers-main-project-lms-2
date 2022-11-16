import {MdArrowBackIos } from "react-icons/md";

const Profilecard = () => {
    return ( 

    <div className="pt-3">
        <div className="py-3">
        <span className="d-flex">
        <MdArrowBackIos className="mt-1"/>
        <p className="m-0">Students/</p>
        <p className="m-0">Nitha Samuel</p>
        
        </span>
        
        </div>

        <div className="d-flex pt-3">
        
        <div className="col-8">
        <h1>Nitha Samuel</h1>
        <p>nithasamuel@gmail.com</p>
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

     );
}
 
export default Profilecard;