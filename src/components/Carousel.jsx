import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="carousel image" className='carousel-image'/>
    </div>
  );
};

export default Carousel;
