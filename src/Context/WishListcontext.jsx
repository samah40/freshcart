import axios from "axios"
import { createContext } from "react"

export const WishListContext= createContext()
export default function WishListProvider({children}) {
  const  headers={
    token:localStorage.getItem("tkn")
}

async function getAllProductWish(){
  await  axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",
   {
    headers,
   }
)
    .then((res)=>{
        console.log(res.data)
        return true
    }).catch((err)=>{
        console.log(err)
        return false
    })
}
getAllProductWish()
async function addProductWish(id){
await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",
    {
            "productId": id
    },{
        headers,
    }
).then((res)=>{
    console.log(res.data);
    getAllProductWish()
    
}).catch((err)=>{
    console.log(err);
    
})
}

  return (
    <WishListContext.Provider value={{getAllProductWish,addProductWish}} >
      {children}
    </WishListContext.Provider>
  )
}
