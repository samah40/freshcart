import axios from "axios"
import { createContext } from "react"

export const WishListContext= createContext()
export default function WishListProvider({children}) {
  const  headers={
    token:localStorage.getItem("tkn")
}

async function getAllProductWish(){
 return await  axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",
   {
    headers,
   }
)
    .then((res)=>{
        console.log("wishlist",res.data)
        return res
    }).catch((err)=>{
        console.log(err)
        return err
    })
}

async function addProductWish(id){
return await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",
    {
            "productId": id
    },{
        headers,
    }
).then((res)=>res).
catch((err)=>err)
}
function removeItem(id){
return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
  headers:{
    token:localStorage.getItem("tkn")
  }
}).then((res)=>res)
.catch((err)=>err)

}

  return (
    <WishListContext.Provider value={{addProductWish, getAllProductWish,removeItem}} >
      {children}
    </WishListContext.Provider>
  )
}
