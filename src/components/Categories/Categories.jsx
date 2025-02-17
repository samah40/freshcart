import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoaderScreen from "../Loaderscreen/Loaderscreen";
import useCategories from "../../CustomHooks/usecategories";


export default function Categories() {
  const {data,isLoading,isError}=useCategories()

  if(isLoading){
    <LoaderScreen/>
  }
  if(isError){
    <h2>please try again</h2>
  }
  

  return (
    <div className="container mx-auto  p-20">
       <Helmet>
                
                <title>Categories</title>
                
            </Helmet>
          <div className=" grid  w-full sm:grid-col-2  md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 ">
          {data?.data?.data.map((category)=>(
            <div key={category._id} >
              <img src={category.image} alt={category.name} className="w-full md:h-72 lg:object-contain  rounded-lg hover:scale-110" />
              <h2 className="font-bold ">{category.name}</h2>

            </div>
            ))}
          </div>
     
    </div>
  )
}
