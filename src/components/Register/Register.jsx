import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"


export default function Register() {
  let navigate =useNavigate()
const [apierror, setapierror] = useState("")
const [isLoading, setIsLoading] = useState(false)


  let validationSchema = yup.object().shape({
    name:yup.string().min(3,"name minlength is 3").max(10,"name maxlength is 10").required("name is required"),
    email:yup.string().email("email is invalid").required("email is required"),
    phone:yup.string().matches(/^01[0125][0-9]{8}$/,"phone must be Egyptian number").required("phone is required"),
    password:yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,"password must start with uppercase").required("password is required"),
    rePassword:yup.string().oneOf([yup.ref("password")],"password and rePassword must be same").required("rePassword is required")

  })

  

 async function handleregister(formValues){
setIsLoading(true)
await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",formValues)
.then((response)=>{
  setIsLoading(false)
  navigate("/")
  console.log(response?.data?.message)
}).catch((error)=>{
  setIsLoading(false)
  setapierror(error?.response?.data?.message)
}

)
  }

 let formik = useFormik(
    {
      initialValues:{
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:""
      },
      validationSchema
      ,
      onSubmit:handleregister,
    }
  )
  return (
    <div className=" py-10 max-w-xl mx-auto ">
      {apierror==""?null:<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {apierror}
</div>}
   
<h2 className="text-3xl  text-gray-500 font-bold mb-10 ">Register Now:</h2>
<form className="max-w-2xl mx-auto" onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group ">
    <input type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur } name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your name:</label>
  </div>
 {formik.errors.name && formik.touched.name?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.name}
</div>:null}

  <div className="relative z-0 w-full mb-5 group ">
    <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your email:</label>
  </div>
  {formik.errors.email && formik.touched.email ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.email}
</div>:null}

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your password:</label>
  </div>
  {formik.errors.password && formik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.password}
</div>:null}


  <div className="relative z-0 w-full mb-5 group">
    <input type="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="rePassword" id="floating_rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your rePassword:</label>
  </div>
  {formik.errors.rePassword && formik.touched.rePassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.rePassword}
</div>:null}


  <div className="relative z-0 w-full mb-5 group">
    <input type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your phone number:</label>
  </div>
  {formik.errors.phone && formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.phone}
</div>:null}


 
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium
   rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700
    dark:focus:ring-green-800">
    {isLoading? <i className="fas fa-spinner fa-spin"></i>: " Submit"} 
     </button>
</form>


    </div>
  )
}
