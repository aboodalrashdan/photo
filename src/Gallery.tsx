import React from 'react';

interface Photo {
  id: string;
  title: string;
  src: string;
}

interface GalleryProps {
  photos: Photo[];
  searchTerm: string;
}

const Gallery: React.FC<GalleryProps> = ({ photos, searchTerm }) => {
  const hasPhotos = photos && photos.length > 0;

  return (
    <div>
      {searchTerm && <h2>{searchTerm} Pictures</h2>}
      {hasPhotos ? (
        <div className="gallery">
          {photos.map((photo) => (
            <div key={photo.id} className="photo">
              <img src={photo.src} alt={photo.title} />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>No images found.</h2>
          <p>Please try a different search term</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
