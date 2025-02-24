import axios from "axios"
import { useFormik } from "formik"
import { useContext, useState } from "react"

import * as yup from "yup"
import { cartcontext } from "../../Context/CartContext"
import toast from "react-hot-toast"



export default function Cash() {
 
  
const [apierror, setapierror] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [isCash, setIsCash] = useState(false)


  let validationSchema = yup.object().shape({
    details:yup.string().required("Details is required"),
    phone:yup.string().required("phone is required"),
    city:yup.string().required("city is required"),
  })

const {cardId,resetValues}=  useContext(cartcontext)


 async function Checkout(formValues){
  console.log(cardId)
 await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:5173`,
  {
    shippingAddress:formValues,
       
},
    {
        headers:{
          token:localStorage.getItem("tkn")
        }
      
    },
   
  ).then((res)=>{
    window.open(res.data.session.url)
console.log(res.data)
  }).catch((err)=>{
console.log(err)
  })
}

 async function Cash(formValues){
   console.log(cardId);
   
    setIsLoading(true)
   await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cardId}`,
        {
            shippingAddress:formValues,
               
        }, 
      {
        headers:{
          token:localStorage.getItem("tkn")
      }
       
      }
    ).then((res)=>{
      console.log(res.data)
      if(res.data.state==="success"){
        toast.success("order created",{position:"bottom-left"})
        resetValues()
      }
      setIsLoading(false)
        console.log("res",res)
    }).catch((err)=>{
      console.log(err)
       setapierror(err?.response?.data?.message)
       setIsLoading(false)
    })

  }
const initialValues={
  details:"",
  phone:"",
  city:"",
}
 let formik = useFormik(
    {
      initialValues,
      validationSchema
      ,
      onSubmit:function(formValues){
if(isCash){
  Cash(formValues)
}else{
  Checkout(formValues)
}
      }
    }
  )
  return (
    <div className=" py-10 max-w-xl mx-auto ">
      {apierror==""?null:<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {apierror}
</div>}
   
<h2 className="text-3xl  text-gray-500 font-bold mb-10 ">shipping Now:</h2>
<form className="max-w-2xl mx-auto" onSubmit={formik.handleSubmit}>
 

  <div className="relative z-0 w-full mb-5 group ">
    <input type="text" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} name="details" id="floating_details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  details:</label>
  </div>
  {formik.errors.details && formik.touched.details ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.details}
</div>:null}
<div className="relative z-0 w-full mb-5 group">
    <input type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> phone:</label>
  </div>
  {formik.errors.phone && formik.touched.phone ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.phone}
</div>:null}

  <div className="relative z-0 w-full mb-5 group">
    <input type="text" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} name="city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city:</label>
  </div>
  {formik.errors.city && formik.touched.city?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.city}
</div>:null}


 <div className="flex items-center">
 <button type="submit" onClick={()=>setIsCash(true)}   className= "mt-5 text-white  mr-2 bg-main hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {isLoading? <i className="fas fa-spinner fa-spin"></i>: " cash"} 
     </button>
     
 <button type="submit" onClick={()=>setIsCash(false)} className= "mt-5 text-white bg-main hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {isLoading? <i className="fas fa-spinner fa-spin"></i>: " checkout"} 
     </button>
     

 </div>
 
</form>


    </div>
  )
}
