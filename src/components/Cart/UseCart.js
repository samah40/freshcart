

import { useContext } from "react";
import toast from "react-hot-toast";
import { cartcontext } from "../../Context/CartContext";


export default function UseCart() {
    
const{products,totalCartPrice,updateCount,removeElement} =useContext(cartcontext)

async function handleDelete(id){
const res= await removeElement(id)
res? toast.success("product remove success"):toast.error("error")
}

async function handleChangeCount(id,newCount){
  console.log(products);
  
 const res =await  updateCount(id,newCount)
res ? toast.success("product count changed"): toast.error("error")}
  return {products,totalCartPrice,handleChangeCount,handleDelete}
}
