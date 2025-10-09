import React, { useEffect } from "react";
import { useRef } from "react";
// import { useReducer } from "react";
import { useState } from "react";
import { ReactTyped } from "react-typed";

const images = import.meta.glob("../assets/images/*.{jpg,png,jpeg,svg}", {
  eager: true,
});

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const imagesPerPage = 10;

  const imagelist = Object.values(images).map((img) => img.default);
  // imagelist = Array(10).fill(imagelist).flat();

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imagelist.slice(indexOfFirstImage, indexOfLastImage);

  const nextPage = () => {
    if (indexOfFirstImage < imagelist.length) setcurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevPage = () => {
    if (currentPage > 1) setcurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openlightbox = (index) => {
    setcurrentIndex(index);
    setLightboxOpen(true);
  };

  const changeImage = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setcurrentIndex(newIndex);
      setFade(true);
    }, 100);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => changeImage((prev) => (prev + 1) % imagelist.length);

  const prevImage = () =>
    changeImage((prev) => (prev - 1 + imagelist.length) % imagelist.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  };

  useEffect(() => {
    const handlekeydown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handlekeydown);
    return () => window.removeEventListener("keydown", handlekeydown);
  });

  return (
    <section className="flex flex-col gap-y-10 pt-32 dark:bg-gradient-to-b from-gray-900 to-gray-800">
      <section>
        <div className="space-y-3">
          <h2 className="text-3xl md:text-[60px] font-bold text-center dark:text-white">
            This is My{" "}
            <ReactTyped
              strings={["Gallery", "Portfolio", "Work"]}
              typeSpeed={80}
              backSpeed={50}
              loop
              showCursor={true}
              className="text-blue-500 [text-shadow:_7px_5px_10px_rgba(97,202,255,0.92)] dark:text-white"
            />
          </h2>

          <p className="text-xl font-semibold text-center dark:text-white">
            Lorem ipsum dolor sit, amet consectetur
            <br />
            adipisicing elit. Officiis quasi sed voluptate cum natus autem.
          </p>
        </div>
      </section>

      <section className="m-5">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 p-4">
          {currentImages.map((img, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full rounded-lg hover:scale-105 transition-transform duration-300 dark:border-white dark:border-1"
                onClick={() => openlightbox(indexOfFirstImage + index)}
              />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute left-4 text-white text-3xl font-bold hidden md:block"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <img
              src={imagelist[currentIndex]}
              alt={`lightbox-${currentIndex}`}
              className={`max-h-[90vh] max-w-[90vw] rounded-lg transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              } `}
            />
            <button
              className="absolute right-4 text-white text-3xl font-bold hidden md:block"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
        )}
      </section>

      <div className="flex justify-center items-center gap-5 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        <span className="text-lg font-medium dark:text-white">
          Page {currentPage} / {Math.ceil(imagelist.length / imagesPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={indexOfFirstImage >= imagelist.length}
          className="px-4 py-2 bg-gray-300 rounded-lg dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
