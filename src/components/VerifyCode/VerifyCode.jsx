import axios from "axios"
import { useFormik } from "formik"
import toast from "react-hot-toast"
import {  useNavigate } from "react-router-dom"

import * as yup from "yup"

export default function VerifyCode() {
    let navigate= useNavigate()

    let validationSchema = yup.object().shape({
      resetCode:yup.string().required("resetCode is required"),
    })
  
    
  
   async function handleResetCode(formValues){
  
  await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
   {
    
    
        "resetCode":formValues.resetCode
    
  
   }
  ).then((res)=>{console.log(res);
    toast.success("Reset code sent to your resetCode",
      {
        duration:3000,
        position:"bottom-left"
      }
    )
    navigate("/reset-password");
  }).catch((err)=>{console.log(err);
    toast.error("The reset code was not sent. Please check your resetCode and try again",
      {
        duration:3000,
        position:"bottom-left"
      }
    )
  })
  
    }
    let formik = useFormik(
        {
          initialValues:{
          
            resetCode:"",
           
          },
          validationSchema
          ,
          onSubmit:handleResetCode,
        }
      )
    return (
      <div className=" py-10 container">
      <h2 className="text-3xl  text-[#212529] font-bold mb-10 ">reset your account password</h2>
      <form className="max-w-7xl mx-auto " onSubmit={formik.handleSubmit}>
      <div className="relative z-0 w-full mb-1 group ">
      <input type="resetCode" value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} name="resetCode" id="floating_resetCode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="floating_resetCode" className=" P-4 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Code:</label>
    </div>
    {formik.errors.resetCode && formik.touched.resetCode ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
   {formik.errors.resetCode}
  </div>:null}
  <button type="submit" className="btn text-[#08ac0a] border-2 border-[#08ac0a] mt-5 !text-xl">verify</button>
  </form>
     </div>
    )
  }
  
