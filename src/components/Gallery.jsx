
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/image1.jpg', alt: 'School Event 1' },
    { id: 2, src: '/images/image2.jpg', alt: 'School Event 2' },
    { id: 3, src: '/images/image3.jpg', alt: 'School Event 3' },
    { id: 4, src: '/images/image4.jpg', alt: 'School Event 4' },
    { id: 5, src: '/images/image5.jpg', alt: 'School Event 5' },
    { id: 6, src: '/images/image6.jpg', alt: 'School Event 6' },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gallery</h1>
      <p className="gallery-description">Take a glimpse into the activities and events at The Lyceum School!</p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
