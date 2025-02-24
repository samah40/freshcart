import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export default function useBrands() {
    async function getAllBrands(){
      
        return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
          }
          const res=useQuery({
            queryKey:["brands"],
            queryFn:getAllBrands()
          })

          console.log(res?.data);
          
  return res
}
