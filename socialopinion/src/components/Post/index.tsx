import styles from './post.module.css';

type postProps = {
    title: string;
    author: number;
    body: string;
}

function Post({title, author, body}: postProps) {

  return (
    <div className={styles.post}>
        <div>
        <h3>{title}</h3>
        <p>{body}</p>
        </div>
        <h4>Par :<br/>utilisateur <span>{author}</span></h4>
    </div>
  );
}

export default Post;
