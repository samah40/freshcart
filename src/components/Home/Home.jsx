import MainSlider from "../MainSlider/MainSlider"
import CategorySlider from "./component/CategorySlider/CategorySlider"
import RecentProduct from "./component/RecentProduct/RecentProduct"




 export default function Home() {
 
  return(
    <>
  <div>
  <MainSlider/>
  <CategorySlider/>
  </div>
    <RecentProduct/>
    </>
  )
}
