import { Helmet } from "react-helmet"
import MainSlider from "../MainSlider/MainSlider"
import CategorySlider from "./component/CategorySlider/CategorySlider"
import RecentProduct from "./component/RecentProduct/RecentProduct"




 export default function Home() {
 
  return(
    <>
    <Helmet>
                
                <title>home page</title>
                
            </Helmet>
  <div>
  <MainSlider/>
  <CategorySlider/>
  </div>
    <RecentProduct/>
    </>
  )
}
