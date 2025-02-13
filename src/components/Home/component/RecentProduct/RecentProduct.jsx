import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import LoaderScreen from "../../../Loaderscreen/Loaderscreen"
import { Link } from "react-router-dom"





 export default function RecentProduct() {
  const [allproduct, setallproduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  function getallproduct(){
    setIsLoading(true)
  axios.get("https://ecommerce.routemisr.com/api/v1/products",
      {
        params:{
          sort:"price",
        }
      }
    ).then(
      (response)=>{
setallproduct(response?.data?.data)
setIsLoading(false)
      }
    ).catch((error)=>{
console.log(error)
setIsLoading(false)
    })
  }

  useEffect(() => {
   getallproduct()
  
  
    }
  , [])
  
  return (
    <div className="container  mx-auto  ">
{isLoading&& <LoaderScreen/>}
      {allproduct?
       <div className="grid  w-full sm:grid-col-2  md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-5">
       {allproduct?.map(
         (products)=>
            <div key={products._id} className=" rounded-lg p-3 group relative border border-5 hover:border-[#08ac0a] border-transparent">
<Link to={`/productDetails/${products?.id}`}>

             <img src={products.imageCover} alt={products.title} className="w-full mb-1 h-auto object-cover" />
             <h3 className="text-[#08ac0a] ">{products.category.name}</h3>
             <h2 className="mb-4 font-bold">{products.title.split(" ").slice(0,2).join(" ")}</h2>
             <div className="flex justify-between items-center">
              
             <p>{products.price} EGP</p>

             <div>
              
             <p>
             <i className="text-[#ffc908] fa-solid fa-star"></i>
              {products.ratingsAverage}</p>
             </div>
             </div>
             </Link>
             <button className="btn w-full text-center text-white bg-[#08ac0a] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 mt-5 duration-700 ease-in-out transition-all">Add to Cart</button>

           </div> 
         
       )
       
       }
       
       
             </div> :
             <h2>No data exist</h2>
           
      }



     

    </div>
  )
}
