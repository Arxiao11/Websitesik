import React, { useState } from 'react';
import './Galllery.css'; // Buat file CSS untuk styling

function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    'https://sik-kdserang.upi.edu/wp-content/uploads/2022/10/IMG_2484-scaled.jpg',
    'https://sik-kdserang.upi.edu/wp-content/uploads/2022/10/IMG_2317-1024x683.jpg',
    'https://sik-kdserang.upi.edu/wp-content/uploads/2022/10/IMG_2350-scaled.jpg',
  ];
  

  const nextPhoto = () => {
    setCurrentPhoto((currentPhoto + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-photo" style={{ backgroundImage: `url(${photos[currentPhoto]})` }}>
      <div className="overlay">
      <button className="next-button" onClick={nextPhoto}>&#10095;</button>
      <div className='overlay-2'>
      <button className="prev-button" onClick={prevPhoto}>&#10094;</button>
      </div>
      <p className="image-caption">Sistem Informasi Kelautan {currentPhoto + 1}</p>
    </div>
      </div>
    </div>
  );
}

export default Gallery;
