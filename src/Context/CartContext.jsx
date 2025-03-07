import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import  {createContext, useState} from "react";
import { AuthContext } from "./Authcontext";


export const cartcontext = createContext()


 
export default function CartContextProvider({children}){
// const [numOfCartItems, setNumOfCartItems] = useState(0)
const [products, setProducts] = useState(null)
const [totalCartPrice, setTotalCartPrice] = useState(0)
const [cardId, setCardId] = useState(null)
const numOfCartItems=products?.length;
const {userToken} =useContext(AuthContext)
const headers={
  token:localStorage.getItem("tkn")
 
  
}

function resetValues(){
  setCardId(null)
  setProducts(null)
  setTotalCartPrice(0)
}


async function removeElement(id){
 return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers
    }
  ).then((res)=>{
    // setNumOfCartItems(res.data.numOfCartItems)
    setProducts(res.data.data.products)
    setTotalCartPrice(res.data.data.totalCartPrice)
    return true
  })
  .catch((err)=>{
    console.log(err)
    return false
  })
}
async function updateCount(id,newCount){
return await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      "count": newCount
  },
  {
    headers
  }
).then((res)=>{
  // console.log(res.data)
  // setNumOfCartItems(res.data.numOfCartItems)
    setProducts(res.data.data.products)
    setTotalCartPrice(res.data.data.totalCartPrice)
    return true
}).catch((err)=>{
  console.log(err);
  return false
})
    
}
function getUserCart(){
axios.get("https://ecommerce.routemisr.com/api/v1/cart",
  {
    headers}
).then((res)=>{
    // setNumOfCartItems(res.data.numOfCartItems)
    setProducts(res.data.data.products)
    setTotalCartPrice(res.data.data.totalCartPrice)
    // console.log(res.data.numOfCartItems)
    // console.log(res.data.data.products)
    // console.log(res.data.data.totalCartPrice)
    // console.log(res.data)
  setCardId(res.data.cartId)
  console.log("get",res.data.cartId)
 
})
.catch((err)=>{console.log(err);
})
}

    async function addToCart(Id){
        return await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
          {
              productId: Id
          },
          {
              headers,
          }
        ).then((res)=> {
            // console.log(res.data)

            // setNumOfCartItems(res.data.numOfCartItems)
            // setProducts(res.data.data.products)
            // setTotalCartPrice(res.data.data.totalCartPrice)
            getUserCart()
           
            setCardId(res.data.cartId)
            console.log("add",res.data.cartId)
 
         
            return true;
        }
        
        )
        .catch((err)=>{
            console.log(err)
            return false;
        })

          }
    
          useEffect(() => {
            if(userToken)
            getUserCart()
            
          }, [userToken])
          
    
    return <cartcontext.Provider value={{ addToCart ,getUserCart ,totalCartPrice,
    products,numOfCartItems,updateCount,removeElement,cardId,resetValues}}>
        {children}
    </cartcontext.Provider>
}