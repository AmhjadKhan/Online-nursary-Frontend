import { useEffect, useState } from "react";
import slider1 from "../../assets/slider/slider1.webp";
import slider2 from "../../assets/slider/slider2.webp";
import slider3 from "../../assets/slider/slider3.webp";
import slider4 from "../../assets/slider/slider4.webp";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
    }, 8000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalSlides]);

  // Updated goToSlide function
  const goToSlide = (slideNumber: any) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  };

  return (
    <div className="carousel w-full">
      <div className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"}`}>
        <img src={slider1} className="w-full" alt="Slide 1" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => goToSlide(4)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => goToSlide(2)}>
            ❯
          </button>
        </div>
      </div>

      <div className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"}`}>
        <img src={slider2} className="w-full" alt="Slide 2" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => goToSlide(1)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => goToSlide(3)}>
            ❯
          </button>
        </div>
      </div>

      <div className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"}`}>
        <img src={slider3} className="w-full" alt="Slide 3" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => goToSlide(2)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => goToSlide(4)}>
            ❯
          </button>
        </div>
      </div>

      <div className={`carousel-item relative w-full ${currentSlide === 4 ? "block" : "hidden"}`}>
        <img src={slider4} className="w-full" alt="Slide 4" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => goToSlide(3)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => goToSlide(1)}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
