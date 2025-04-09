import styles from './ImageCard.module.css';

const ImageCard = ({ webformatURL, alt, onClick }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={webformatURL}
        alt={alt}
        className={styles.image}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
