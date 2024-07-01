
import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import CSS file for styling



const ImageSlider = ({ images, transitionDuration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, transitionDuration]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div className='image-container' key={index}>
          <div className={index === currentImageIndex ? 'active' : ''}>
            <h2>{image.hed}</h2>
            <h4>{image.tex}</h4>
          </div>
          <img
          src={image.img}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
