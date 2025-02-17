import axios from "axios"
import { useContext} from "react"
import { Helmet } from "react-helmet"
import { Link, useParams } from "react-router-dom"
import Slider from "react-slick"
import { cartcontext } from "../../Context/CartContext"
import { useQuery } from "@tanstack/react-query"
import LoaderScreen from "../Loaderscreen/Loaderscreen"
import toast from "react-hot-toast"
import { MdShoppingCart } from "react-icons/md";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
 autoPlaySpeed:1000
    
};
export default function ProductDetails() {
 
    const {productId}= useParams()
   const {addToCart}= useContext(cartcontext)

    
  async  function handleAddProduct(){
  let res= await addToCart(productId)
  if(res){
    toast.success("Product added to cart successfully!",{
      duration:3000,
      position:"top-center"
     })
  }else{
   toast.error( "Failed to add the product to the cart. Please try again!",{
    duration:3000,
    position:"top-center"
   })} if(res){
      toast.success("Product added to cart successfully!",{
        duration:3000,
        position:"top-center"
       })
    }else{
     toast.error( "Failed to add the product to the cart. Please try again!",{
      duration:3000,
      position:"top-center"
     })}
   }
    function getproductdetails(){
    return   axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
  
    }
 const {data,isError,isLoading} = useQuery({
  queryKey:["productDetials" , productId],
queryFn:getproductdetails
 })

 if(isLoading){
 return <LoaderScreen/>
 }
 if(isError){
 return  <h2 className="text-center p-4">No Product Found With this Id <Link to="/home" className="text-green-600 underline">go to home page</Link></h2>
 }
 let productDetials= data?.data?.data
   
  return (
    <div className="row flex my-14 items-center">
       <Helmet>
                
                <title>{productDetials?.title}</title>
                
            </Helmet>
      <div className="w-1/4 ">
      <Slider {...settings} >
        {productDetials?.images?.map((img, index)=>(
          <img  src={img} alt={img.title} key={index} />

        ))}
        </Slider>
      </div>
      <div className="w-3/4 px-10 py-4">
      <div  className="inner p-4">
<h2 className="font-bold text-2xl">{productDetials?.title}</h2>
<p className="text-gray-400 text-md my-4">{productDetials?.description}</p>
<small>{productDetials?.category?.name}</small>
<div className="flex justify-between items-center mt-4">
              
              <p className="text-xl">{productDetials?.price} EGP</p>
 
              <div>
               
              <p>
              <i className="text-[#ffc908] fa-solid fa-star"></i>
               {productDetials?.ratingsAverage}</p>
              </div>
              </div>
              <button onClick={ handleAddProduct} className="btn w-full text-center !font-bold text-white bg-[#08ac0a] my-10">+Add to Cart</button>
              
      </div>
      </div>
    </div>
  )
}
