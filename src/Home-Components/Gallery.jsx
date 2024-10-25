import React, { useState } from "react";
// import "react-image-lightbox/style.css";
// import Lightbox from "react-image-lightbox";

// Dummy image data for portfolio items
const images = [
  { src: "images/illustration-1.jpg", category: "photography", title: "Portfolio Item 1" },
  { src: "images/illustration-2.jpg", category: "photography graphicdesign illustrations", title: "Portfolio Item 2" },
  { src: "images/illustration-3.jpg", category: "branding graphicdesign", title: "Portfolio Item 3" },
  { src: "images/illustration-4.jpg", category: "graphicdesign", title: "Portfolio Item 4" },
//   { src: "images/illustration-5.jpg", category: "photography illustrations", title: "Portfolio Item 5" },
  // Add more images as needed...
];

const categories = [
  { name: "Photography", filter: ".photography" },
  { name: "Graphic Design", filter: ".graphicdesign" },
  { name: "Illustrations", filter: ".illustrations" },
  { name: "Branding", filter: ".branding" },
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtering logic
  const filteredImages = activeFilter === "all"
    ? images
    : images.filter((image) => image.category.includes(activeFilter));

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center py-5">
        {categories.map((category) => (
          <button
            key={category.filter}
            className={`btn btn-primary px-5 py-2 uppercase text-white ${activeFilter === category.filter.slice(1) ? "bg-blue-600" : "bg-blue-500 hover:bg-blue-600"} transition duration-300`}
            onClick={() => setActiveFilter(category.filter.slice(1))}
          >
            {category.name}
          </button>
        ))}
        <button
          className={`btn btn-primary px-5 py-2 uppercase text-white ${activeFilter === "all" ? "bg-blue-600" : "bg-blue-500 hover:bg-blue-600"} transition duration-300`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
        {filteredImages.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image.src}
              alt={image.title}
              className="img-fluid rounded-4 cursor-pointer"
              onClick={() => {
                setSelectedImage(index);
                setLightboxOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={filteredImages[selectedImage].src}
          nextSrc={filteredImages[(selectedImage + 1) % filteredImages.length].src}
          prevSrc={filteredImages[(selectedImage + filteredImages.length - 1) % filteredImages.length].src}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setSelectedImage((selectedImage + filteredImages.length - 1) % filteredImages.length)
          }
          onMoveNextRequest={() =>
            setSelectedImage((selectedImage + 1) % filteredImages.length)
          }
        />
      )}
    </>
  );
};

export default Portfolio;
