import React, { useEffect } from "react";
import { useRef } from "react";
// import { useReducer } from "react";
import { useState } from "react";

const images = import.meta.glob("../assets/images/*.{jpg,png,jpeg,svg}", {
  eager: true,
});

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const imagelist = Object.values(images).map((img) => img.default);

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
    <section className="flex flex-col gap-y-10 mt-32">
      <section>
        <div className="space-y-3">
          <h2 className="text-[60px] font-bold text-center">Gallery</h2>

          <p className="text-xl font-semibold text-center">
            Lorem ipsum dolor sit, amet consectetur
            <br />
            adipisicing elit. Officiis quasi sed voluptate cum natus autem.
          </p>
        </div>
      </section>

      <section className="m-5">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
          {Object.values(images).map((img, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <img
                src={img.default}
                alt={`gallery-${index}`}
                className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
                onClick={() => openlightbox(index)}
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
    </section>
  );
}
