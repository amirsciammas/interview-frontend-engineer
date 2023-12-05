import React, {useEffect, useState} from 'react';

import Post from './components/Post';

import styles from './home.module.css';

type postObject =
  {
    userId: number,
    id: number,
    title: string,
    body: string
  } []

function App() {

  const [isDataLoading, setDataLoading] = useState(true);
  const [postsList, setPostsList] = useState<postObject>([{userId:0, id:0, title:'', body:''}]);
  const [error, setError] = useState(false);

  const [postsVisibility, setPostsVisibility] = useState(true);
  const [userVisibility, setUserVisibility] = useState(false);
  const [userScope, setUserScope] = useState(1);
  const [userPosts, setUserPosts] = useState<postObject>([{userId:0, id:0, title:'', body:''}]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsList = await response.json();
        const shuffledPosts = postsList.sort(() => Math.random() - 0.5);
        setPostsList(shuffledPosts);
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

  function switchPostsUser (param: string, newUserScope: number, postsList: postObject) {
    if (param === 'userON'){
      setPostsVisibility(false)
      setUserVisibility(true)
      setUserScope(newUserScope)

      const userPosts = postsList.filter((post) => post.userId === newUserScope)
      setUserPosts(userPosts)

      window.scrollTo(0, 0)
    }

    if (param === 'postsON'){
      setPostsVisibility(true)
      setUserVisibility(false)
    }
  }


  return (
    <div className={styles.global}>
      <h1>Social<br/>Opinion</h1>
      { isDataLoading ? (
      <section> Chargement </section>
      ) : (
        <div>

          <section style={{display : postsVisibility ? 'block' : 'none'}}>
            <h2>Tous les Posts</h2>
            <div>
            {postsList?.map((post) => (
              <Post onClick={() => switchPostsUser('userON', post.userId, postsList)}
              key={post.id} 
              title={post.title} 
              author={post.userId} 
              body={post.body}/>
            ))}
            </div>
          </section>


          <section style={{display : userVisibility ? 'block' : 'none'}}>
            <button className={styles.switchButton} onClick={() => switchPostsUser('postsON', 1, postsList)}>Revenir sur les posts</button>
            <h2>Profil de l'utilisateur {userScope}</h2>
            <div>
            {userPosts?.map((post) => (
              <Post
              key={post.id} 
              title={post.title} 
              author={post.userId} 
              body={post.body}/>
            ))}
            </div>
          </section>


        </div>
      )}
        
    </div>
  );
}






export default App;
