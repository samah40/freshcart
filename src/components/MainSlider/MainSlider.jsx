import Slider from "react-slick"
import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"

export default function MainSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       
  autoplaySpeed: 2000,
  cssEase: "linear"  ,
  arrows:false,
      };
  return (
   <div className="row flex container my-10">
     <div className="w-3/4">
     <Slider {...settings}>
        <div>
        <img src={img3} alt="" className="w-full h-[500px]"/>
        </div>
        <div>
        <img src={img2} alt="" className="w-full h-[500px]"/>
        </div>
        <div>
        <img src={img1} alt="" className="w-full h-[500px]"/>
        </div>
         </Slider>
    
     </div>
     <div className="w-1/4 flex flex-col">
     <img src={img2} alt="" className="w-full h-[250px]" />
     <img src={img1} alt="" className="w-full h-[250px]" />
     </div>
   </div>
  )
}
