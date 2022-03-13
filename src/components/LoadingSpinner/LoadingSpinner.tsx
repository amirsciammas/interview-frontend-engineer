import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper} data-testid="LoadingSpinner">
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
