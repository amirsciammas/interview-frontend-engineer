import styles from './styles.module.css';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children} </div>;
};
