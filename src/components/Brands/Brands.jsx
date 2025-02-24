import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export default function Brands() {
const [allBrands, setAllBrands] = useState(null)
 async function getAllBrands(){
  await  axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    .then((res)=>{
setAllBrands(res.data.data)


    }).catch((err)=>{
      console.log(err)
    })
  }
useEffect(() => {
getAllBrands()
  
}, [])

  return (
    <div className="container mx-auto ">
      <h2 className=" mt-10 text-green-600 text-5xl font-bold text-center ">All Brands</h2>
     <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6 text-center my-10">
      
      {allBrands?.map((brand)=>(
        <div className="inner rounded-lg border hover:shadow-lg hover:scale-105  hover:shadow-blue-200 transition-all duration-150" key={brand._id}>
<img src={brand.image} alt={brand.name} className="w-full" />
<p className="p-4 font-semibold">{brand.name}</p>
</div>
      ))}

     </div>
    </div>
  )
}
