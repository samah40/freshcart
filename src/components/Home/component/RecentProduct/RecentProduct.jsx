import axios from "axios"
// import { useState } from "react"
// import { useEffect } from "react"
import LoaderScreen from "../../../Loaderscreen/Loaderscreen"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useContext, useState } from "react"
import { cartcontext } from "../../../../Context/CartContext"
import {WishListContext} from "../../../../Context/WishListcontext"
import toast from "react-hot-toast"
import LoaderCart from "../../../LoaderCart/LoaderCart"
import { FaRegHeart } from "react-icons/fa"





 export default function RecentProduct() {
  const {addToCart} =useContext(cartcontext)
const {getAllProductWish, addProductWish}= useContext(WishListContext)
  const [showLoader, setShowLoader] = useState(false);
  const [wishList, setWishList] = useState(false)

   async function handleAddWish(id){

    const  res=await addProductWish(id)
    if(res){
      toast.success("Product added successfully to your wishlist",{
        duration:3000,
        position:"bottom-left"
      })
      setWishList(true)
    }else{
      toast.error("product has not been added to wishlist")
      setWishList(false)
    }
  }
  async function handleAddProduct(id){
    const res = await addToCart(id)
    if(res){
      toast.success("Product added to cart successfully!",{
        duration:3000,
        position:"bottom-left",
       
       })
      
       setShowLoader(true);  
       setTimeout(() => {
         setShowLoader(false); 
       }, 3000);
    }

    else{
     toast.error( "Failed to add the product to the cart. Please try again!",{
      duration:3000,
      position:"top-center"
     })}
  }

  function getallproduct2(){
   return  axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }
 const {data  , isLoading,isError}= useQuery(
    {
      queryKey:["products"],
      queryFn:getallproduct2,
    }
    
  )
 if(isLoading){
return <LoaderScreen/>;
 }

 if (isError){
  return <h2>error occurred please try again later!!!</h2>
 }
const allproduct=data?.data.data


  return (
    <div className="container  mx-auto  ">

      {allproduct?
       <div className="grid  w-full sm:grid-col-2  md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-5">
       {allproduct?.map(
         (products)=>
            <div key={products._id} className="hover:scale-105  duration-200 transition-all rounded-lg p-3 group relative border border-5 hover:border-[#08ac0a] border-transparent">
<Link to={`/productDetails/${products?.id}`}>
<div className="overflow-hidden ">
< FaRegHeart onClick={()=>{handleAddWish(products?.id)}}
 className={`absolute right-3 top-2  rounded-3xl bg-transparent  text-red-600  hover:text-white hover:bg-red-600 `}  />

</div>
             <img src={products.imageCover} alt={products.title} className="w-full mb-1 h-auto object-cover" />
             <h3 className="text-[#08ac0a] ">{products.category.name}</h3>
             <h2 className="mb-4 font-bold">{products.title.split(" ").slice(0,2).join(" ")}</h2>
             <h2>{products._id}</h2>
             <div className="flex justify-between items-center">
              
             <p>{products.price} EGP</p>

             <div>
              
             <p>
             <i className="text-[#ffc908] fa-solid fa-star"></i>
              {products.ratingsAverage}</p>
             </div>
             </div>
             </Link>
             <button onClick={()=>{
              handleAddProduct(products.id)&&  <LoaderCart />
          
             }} className="btn w-full text-center text-white bg-[#08ac0a] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 mt-5 duration-700 ease-in-out transition-all">Add to Cart</button>
 
           </div> 
         
       )
       
       }
       
       
             </div> :
             <h2>No data exist</h2>
           
      }



     

    </div>
  )
}
