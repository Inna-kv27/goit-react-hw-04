import { ThreeDots } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        color="#3f51b5"
        height={80}
        width={80}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
