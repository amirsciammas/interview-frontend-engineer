import styles from './post.module.css';

type postProps = {
    title: string;
    author: number;
    body: string;
    onClick?: () => void;
}

function Post({title, author, body, onClick}: postProps) {

  return (
    <div className={styles.post}>
        <div onClick={onClick}>
        <h3>{title}</h3>
        <p>{body}</p>
        </div>
        <h4>Par :<br/>utilisateur <span>{author}</span></h4>
    </div>
  );
}

export default Post;
