import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slider from "react-slick"


export default function ProductDetails() {
  const [details, setDetails] = useState({})
    const {productId}= useParams()
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
  async  function getproductdetails(){
      await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
        .then((res)=>
setDetails(res.data.data)
        )
        .catch((err)=>
console.log(err)
        )
    }
   useEffect(() => {
    getproductdetails();
     
   }, [ ]);
   
  return (
    <div className="row flex my-14 items-center">
      <div className="w-1/4 ">
      <Slider {...settings} >
        {details?.images?.map((img, index)=>(
          <img  src={img} alt="" key={index} />

        ))}
        </Slider>
      </div>
      <div className="w-3/4 px-10 py-4">
      <div  className="inner p-4">
<h2 className="font-bold text-2xl">{details.title}</h2>
<p className="text-gray-400 text-md my-4">{details.description}</p>
<small>{details?.category?.name}</small>
<div className="flex justify-between items-center mt-4">
              
              <p className="text-xl">{details.price} EGP</p>
 
              <div>
               
              <p>
              <i className="text-[#ffc908] fa-solid fa-star"></i>
               {details.ratingsAverage}</p>
              </div>
              </div>
              <button className="btn w-full text-center !font-bold text-white bg-[#08ac0a] my-10">Add to Cart</button>

      </div>
      </div>
    </div>
  )
}
