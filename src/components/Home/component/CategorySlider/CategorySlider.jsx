
import Slider from "react-slick";
import LoaderScreen from "../../../Loaderscreen/Loaderscreen";
import useCategories from "../../../../CustomHooks/usecategories";

export default function CategorySlider() {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows:true,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
  };
const {data,isLoading,isError}=useCategories()
if(isLoading){
 return <LoaderScreen/>
}
if(isError){
 return <h2 className="mx-auto ">please try again</h2>
}

  return (
    <div className="my-8 mb-10  overflow-hidden mx-10  p-10"> 
      <Slider {...settings} >
        {data?.data?.data.map((category) => (
          <div key={category._id} className="p-2" >
            <img
              src={category.image}
              className="w-full h-[300px] object-cover"
              alt={category.name}
            />
            <h3 className="m-3 font-semibold text-center">{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
