import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows:true,
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

  async function getCategories() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="my-8 mb-10  overflow-hidden mx-10 "> 
      <Slider {...settings} >
        {categories.map((category) => (
          <div key={category._id} >
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
