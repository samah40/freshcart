
import { MdShoppingCart } from 'react-icons/md'

export default function LoaderCart() {
 


  return (
    <div>
       <div className="flex justify-center items-center h-screen">
       <MdShoppingCart
             color="#4fa94d"
             width="100"
             visible={true}
             ariaLabel="falling-circles-loading"
             />
            </div>
    </div>
  )
}


