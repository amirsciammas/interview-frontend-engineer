import React, {useEffect, useState} from 'react';

import Post from './components/Post';

import styles from './home.module.css';

function App() {

  const [isDataLoading, setDataLoading] = useState(true);
  const [postsList, setPostsList] = useState([{userId:0, id:0, title:'', body:''}]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsList = await response.json();
        setPostsList(postsList);
        console.log(postsList[0].title);
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    
    fetchPosts()
  }, []);
  
  if (error) {
    return <p>Error</p>
  } 


  return (
    <div className={styles.global}>
      <h1>Social Opinion</h1>
      { isDataLoading ? (
      <section> Chargement </section>
      ) : (
        <section>
          <h2>Posts</h2>
          <div className='postContainer'>
          {postsList?.map((post) => (
            <Post key={post.id} title={post.title} author={post.userId} body={post.body}/>
          ))}
          </div>
        </section>
      )}
        
    </div>
  );
}






export default App;
