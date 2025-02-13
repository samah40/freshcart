 
 import notfound from "../../assets/images/error.svg"
 export default function Notfound() {
   return (
     <div>
       <div className="container flex justify-center items-center p-10 w-[50%]">
        <img src={notfound} className="w-full" alt="notfound" />
       </div>
     </div>
   )
 }
 