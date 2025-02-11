import { createContext, useEffect, useState } from "react"

export const AuthContext=createContext(0)


export default function AuthContextProvider({children}) {
    const [userToken, setUserToken] = useState(()=>{
        return localStorage.getItem("tkn"); 
    })


    // useEffect(()=>{
    //     const tkn=localStorage.getItem("tkn")
    //     if(tkn != null){
    //         setUserToken(tkn)
    //     }
    // },[])
  return (
   <AuthContext.Provider value={ {userToken,setUserToken} }  >
    {children}
   </AuthContext.Provider>
  )
}
