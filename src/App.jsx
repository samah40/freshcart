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
import { Offline } from "react-detect-offline"
import { CiWifiOff } from "react-icons/ci"
import CartContextProvider from "./Context/CartContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Cart from "./components/Cart/Cart"
import { Toaster } from "react-hot-toast"

import Cash from "./components/Cash/Cash"
import WishList from "./components/WishList/WishList"
import WishListProvider from "./Context/WishListcontext"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import VerifyCode from "./components/VerifyCode/VerifyCode"
import ResetPassword from "./components/ResetPassword/ResetPassword"




const router =createBrowserRouter([
  {path:"",element: <Layout/>, children:
    [
      {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:"home",element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:"products",element: <ProtectedRoute><Products/></ProtectedRoute>},
      {path:"productDetails/:productId",element: <ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path:"cart",element: <ProtectedRoute><Cart/></ProtectedRoute>},
      {path:"cash",element: <ProtectedRoute><Cash/></ProtectedRoute>},
      {path:"categories",element: <ProtectedRoute><Categories/></ProtectedRoute>  },
      {path:"wishlist",element:<ProtectedRoute><WishList/></ProtectedRoute>},
      {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
      {path:"forgetPassword",element: <Unauthenticated><ForgetPassword/></Unauthenticated>},
      {path:"verify-code",element: <Unauthenticated><VerifyCode/></Unauthenticated>},
      {path:"reset-password",element: <Unauthenticated><ResetPassword/></Unauthenticated>},
      {path:"register",element:<Unauthenticated><Register/></Unauthenticated>},
    {path:"login",element:<Unauthenticated><Login/></Unauthenticated>},
    {path:"*",element:<Notfound/>},
    
    ]
  }
])
const client=new QueryClient()
export default function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
   <AuthContextProvider >
    <WishListProvider>
      <CartContextProvider>
   <Offline>
    <div className="offline fixed bottom-8 left-8 bg-gray-100 z-30 px-2 py-2 rounded font-medium rounded-l">
    <CiWifiOff className="inline mr-2 text-xl " />
  you are offline now !
    </div>
  </Offline>
   <RouterProvider router={router}/>
   </CartContextProvider>
   </WishListProvider>
   </AuthContextProvider>
</QueryClientProvider>
<Toaster />
    </div>
  )
}
