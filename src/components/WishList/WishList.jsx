import { useContext, useEffect, useState } from "react"
import { WishListContext } from "../../Context/WishListcontext"
import toast from "react-hot-toast"
import { cartcontext } from "../../Context/CartContext"

export default function WishList() {
  const [wishListDetails, setWishListDetails] = useState(null)
  const{getAllProductWish,removeItem}=useContext( WishListContext)
  const{addToCart}=useContext( cartcontext)
  
 async function getWishList(){
let res= await getAllProductWish()
console.log(res?.data?.data)
setWishListDetails(res?.data?.data)
}
 useEffect(() => {
  
   getWishList()
 }, [])

 async function deleteProduct(id){
  let res=await removeItem(id)
  console.log(res)
  if(res.data.status=="success"){
    toast.success("Product removed successfully to your wishlist")
    getWishList()
  }else{
    toast.error("Failed to remove the product from your wishlist")
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
  return (
    <div>
      <div className="container w-11/12 bg-[#F8F9FA] space-y-6 my-20 py-4 ">
      <h2 className="text-4xl font-semibold text-[#08ac0a] p-4">My wish List</h2>
{wishListDetails?.map((product)=>(
  <div className="inner border-b-2  "  key={product?._id}>
<div className="flex  justify-between items-center my-4  ">
<div className="left flex items-center space-x-4">
 <div >
 <img src={product?.imageCover} alt={product.title} className="w-full max-h-60 rounded-sm " /></div>
 <div className="flex flex-col">
 <h5>{product.title}</h5>
  <h6>{product.price} EGP</h6>
  <button onClick={()=>{deleteProduct(product?._id)}} className=" btn  text-red-500"><i className="fa fa-solid fa-trash-can "></i> remove</button>
 </div>
</div>
<div >
  <button onClick={()=>{handleAddProduct(product?._id)}} className=" btn border-green-500 border !text-2xl">add To Cart</button>
</div>
</div>
</div>
))}
      </div>
    </div>
  )
}
