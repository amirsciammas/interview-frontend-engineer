import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import styles from './index.module.css';

export const Back = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.backButton}>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};
