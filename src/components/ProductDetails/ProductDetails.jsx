import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"


export default function ProductDetails() {
    const {productId}= useParams()
   
  async  function getproductdetails(){
      await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
        .then((res)=>
console.log(res.data)
        )
        .catch((err)=>
console.log(err)
        )
    }
    useEffect(()=>{
        getproductdetails()
    },[])
  return (
    <div>
      
    </div>
  )
}
