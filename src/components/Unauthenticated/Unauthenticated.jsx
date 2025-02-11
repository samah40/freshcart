
import { Navigate } from 'react-router-dom'

export default function Unauthenticated({children}) {
if(localStorage.getItem("tkn")===null){
    return children;
}
  return <Navigate to="/home"/>
}
