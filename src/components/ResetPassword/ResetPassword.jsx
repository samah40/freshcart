import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import * as yup from "yup"



export default function Login() {
  let navigate =useNavigate()
const [apierror, setapierror] = useState("")
const [isLoading, setIsLoading] = useState(false)


  let validationSchema = yup.object().shape({
    email:yup.string().email("email is invalid").required("email is required"),
    newPassword:yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,"password must start with uppercase").required("password is required"),
  })

  

 async function resetPassword(formValues){
setIsLoading(true)
await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",{
    "email":formValues.email,
    "newPassword": formValues.newPassword
}
    
)
.then((response)=>{

  setIsLoading(false)

  console.log(response)
  navigate("/")
}).catch((error)=>{
  setIsLoading(false)
  console.log(error)
}

)
  }

 let formik = useFormik(
    {
      initialValues:{
        email:"",
        newPassword:"",
      },
      validationSchema
      ,
      onSubmit:resetPassword,
    }
  )
  return (
    <div className="container w-[1200px]">
        <div className=" py-10 w-full ">
      {apierror==""?null:<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {apierror}
</div>}
   
<h2 className="text-3xl  text-gray-500 font-bold mb-10 ">reset your account password</h2>
<form className=" mx-auto w-full" onSubmit={formik.handleSubmit}>
 

  <div className="relative z-0 w-full mb-5 group ">
    <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_email" className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your email:</label>
  </div>
  {formik.errors.email && formik.touched.email ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.email}
</div>:null}

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="newPassword" id="floating_newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your newPassword:</label>
  </div>
  {formik.errors.newPassword && formik.touched.newPassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.newPassword}
</div>:null}


 <div className="flex items-center">
 <button type="submit" className= "mt-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {isLoading? <i className="fas fa-spinner fa-spin"></i>: " reset Password"} 
     </button>
     
  

 </div>
 
</form>


    </div>
    </div>
  )
}
