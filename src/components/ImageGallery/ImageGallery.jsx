import ImageCard from '../ImageCard/ImageCard.jsx';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(
        ({
          id,
          webformatURL,
          largeImageURL,
          alt_description,
        }) => (
          <li key={id} className={styles.galleryItem}>
            <ImageCard
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              alt={alt_description}
              onClick={() => onImageClick(largeImageURL)}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default ImageGallery;
