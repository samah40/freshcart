  import { NavLink ,Link, useNavigate } from "react-router-dom"
  import logo from "../../assets/images/freshcart-logo.svg"
import { useContext } from "react"

import { AuthContext } from "../../Context/Authcontext"
import { MdShoppingCart } from "react-icons/md"
import { cartcontext } from "../../Context/CartContext"


  export default function Navbar() {

   const {numOfCartItems}= useContext(cartcontext)
    const navigate =useNavigate()
const {userToken , setUserToken}= useContext(AuthContext)

function handlelogout(){
  localStorage.removeItem("tkn")
  setUserToken(null)
  navigate("/login")
  
}

    return (
      <nav className="bg-gray-200  ">
      <div className="flex items-center justify-between w-5/6 container p-4 mx-auto">
      <div className="flex items-center gap-3">
          <Link to=""><img src={logo} alt="fresh card" /></Link>
        {userToken ?   <ul className="flex items-center space-x-3 font-semibold">
            <li ><NavLink className="block py-2 px-3 text-[#79797a] rounded hover:bg-[#08ac0a] hover:text-white  duration-300 transition-all " to="">Home</NavLink></li>
            <li ><NavLink className="block py-2 px-3 text-[#79797a] rounded hover:bg-[#08ac0a] hover:text-white  duration-300 transition-all " to="products">Products</NavLink></li>
            <li ><NavLink className="block py-2 px-3 text-[#79797a] rounded hover:bg-[#08ac0a] hover:text-white  duration-300 transition-all " to="categories">Categories</NavLink></li>
            <li ><NavLink className="block py-2 px-3 text-[#79797a] rounded hover:bg-[#08ac0a] hover:text-white  duration-300 transition-all " to="brands">Brands</NavLink></li>
          </ul>: ""}
        </div>
        <div className="flex justify-center items-center gap-3">
          <ul className="flex gap-3">
            <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 duration-300 transition-all "  ><i className="fa-brands cursor-pointer fa-facebook"></i></li>
            <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 duration-300 transition-all "  ><i className="fa-brands cursor-pointer fa-twitter"></i></li>
            <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 duration-300 transition-all "  ><i className="fa-brands cursor-pointer fa-instagram"></i></li>
            <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 duration-300 transition-all "  ><i className="fa-brands cursor-pointer fa-linkedin"></i></li>
            <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 duration-300 transition-all "  ><i className="fa-brands cursor-pointer fa-youtube"></i></li>
<Link to="/cart">{userToken&&             <li className=" flex py-2 px-3 relative  text-[#08ac0a]  rounded hover:bg-gray-100 duration-300 transition-all "  ><MdShoppingCart className="text-4xl"/>   <span className="absolute -top-1 right-1/4 bg-[#08ac0a] text-white rounded-full h-5 w-5 items-center justify-center font-bold flex">{numOfCartItems}</span> </li>
} 
</Link>        </ul>
          <ul className="flex justify-center space-x-3 font-semibold">
           {userToken?  <li><span onClick={handlelogout}  className="block py-2 text-[#79797a]  px-3 cursor-pointer hover:bg-[#08ac0a] hover:text-white  duration-300 transition-all ">Logout</span></li>:
           <>
            <li><NavLink className="block py-2 px-3 text-[#79797a] rounded  duration-300 transition-all hover:bg-[#08ac0a] hover:text-white "  to="login">Login</NavLink></li>
            <li><NavLink className="block py-2 px-3 text-[#79797a] rounded  duration-300 transition-all hover:bg-[#08ac0a] hover:text-white "  to="register">Register</NavLink></li>
           </>
           }
           
            
           
          </ul>
        </div>
      </div>
      </nav>
    )
  }
