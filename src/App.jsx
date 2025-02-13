import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Notfound from "./components/Notfound/Notfound"
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Categories from "./components/Categories/Categories"
import Brands from "./components/Brands/Brands"
import AuthContextProvider from "./Context/Authcontext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Unauthenticated from "./components/unauthenticated/unauthenticated"
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductDetails from "./components/ProductDetails/ProductDetails"




const router =createBrowserRouter([
  {path:"",element: <Layout/>, children:
    [
      {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:"home",element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:"products",element: <ProtectedRoute><Products/></ProtectedRoute>},
      {path:"productDetails/:productId",element: <ProtectedRoute><ProductDetails/></ProtectedRoute>},
 
      {path:"categories",element: <ProtectedRoute><Categories/></ProtectedRoute>  },
      {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
      {path:"register",element:<Unauthenticated><Register/></Unauthenticated>},
    {path:"login",element:<Unauthenticated><Login/></Unauthenticated>},
    {path:"*",element:<Notfound/>},
    
    ]
  }
])

export default function App() {
  return (
    <div>
   <AuthContextProvider>
   <RouterProvider router={router}/>
   </AuthContextProvider>
    </div>
  )
}
