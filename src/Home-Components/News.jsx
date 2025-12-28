import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import news1 from "../assets/News/news1.jpeg";
import news2 from "../assets/News/news2.jpeg";
import news3 from "../assets/News/news3.jpeg";
import news4 from "../assets/News/news4.jpeg";
import news5 from "../assets/News/news5.jpeg";
import news6 from "../assets/News/news6.jpeg";
import news7 from "../assets/News/news7.jpeg";
import news8 from "../assets/News/news8.jpeg";
import news9 from "../assets/News/news9.jpeg";

const NextArrow = ({ onClick }) => (
  <div
    className="hidden sm:block absolute right-[-10px] md:right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition duration-300"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden sm:block absolute left-[-10px] md:left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition duration-300"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640, // Small screens (phones)
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const news = [
    { img: news1, title: "Breaking News 1" },
    { img: news2, title: "Latest Updates 2" },
    { img: news3, title: "Trending Now 3" },
    { img: news4, title: "Hot Topic 4" },
    { img: news5, title: "World News 5" },
    { img: news6, title: "Tech Insights 6" },
    { img: news7, title: "Business Spotlight 7" },
    { img: news8, title: "Entertainment Buzz 8" },
    { img: news9, title: "Sports Highlights 9" },
  ];

  return (
    <>
      <div className="md:py-16 sm:py-5 w-full px-4 h-auto flex flex-col justify-center items-center overflow-hidden">
        <h2
          className="w-full text-xl sm:text-3xl lg:text-5xl font-bold text-center tracking-wide text-orange-500 py-5 uppercase"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #f97316, #ec4899)",
          }}
        >
          News Highlights
        </h2>
        <div className="w-full max-w-screen-xl relative px-2 sm:px-5 mb-4">
          <Slider {...settings}>
            {news.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white sm:p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 sm:h-60 md:h-72 lg:h-90 object-cover rounded-md border-2 border-blue-300"
                />
                {/* <h3 className="mt-3 text-sm sm:text-lg md:text-xl font-semibold text-blue-700">
                {item.title}
              </h3> */}
              </div>
            ))}
          </Slider>
        </div>

      </div>

      <div className="w-full flex justify-center items-center sm:mt-10 py-4 overflow-hidden">
        {/* Outer container for clipping */}
        <div className="w-full relative bg-green-600 text-white py-2 shadow-md">
          {/* Inner container with sliding animation */}
          <div className="flex w-full justify-center items-center whitespace-nowrap animate-slide">
            <h1 className="lg:text-2xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
              Registration Open
            </h1>
            <h1 className="lg:text-2xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
              Registration Open
            </h1>
            <h1 className="lg:text-2xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
              Registration Open
            </h1>
            <h1 className="lg:text-2xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
              Registration Open
            </h1>
            <h1 className="lg:text-2xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
              Registration Open
            </h1>
            <h1 className="lg:text-2xl text-base sm:text-xl tracking-wide px-4 sm:px-10">
              Registration Open
            </h1>
          </div>
        </div>
      </div></>
  );
};

export default NewsSlider;
