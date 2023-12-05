import React, {useEffect, useState} from 'react';

import Post from './components/Post';
import Profile from './components/Profile';

import styles from './home.module.css';

// Définition des types TypeScript

type postObject =
  {
    userId: number,
    id: number,
    title: string,
    body: string
  } [];

  type userObject =
  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  };

function App() {

  //Valeur de Loading et d'erreur
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  //Valeurs qui stockent les valeurs fetch Post et User
  const [postsList, setPostsList] = useState<postObject>([{userId:1, id:0, title:'', body:''}]);
  const [usersList, setUsersList] = useState<userObject[]>();

  // Valeurs permettant le switch entre visibilité des Posts ou de la page Utilisateur
  const [postsVisibility, setPostsVisibility] = useState(true);
  const [userVisibility, setUserVisibility] = useState(false);

  // Valeurs permettant le scope de l'utilisateur lié au post cliqué
  const [userScope, setUserScope] = useState(1);
  const [userPosts, setUserPosts] = useState<postObject>([{userId:1, id:0, title:'', body:''}]);

  // Valeur dynamique de la searchbar
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {

    // Fonction de fetch des Posts avec randomisation intégrée
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

    // Fonction de fetch simple des utilisateurs
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersList = await response.json();
        setUsersList(usersList);
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    
    fetchPosts()
    fetchUsers()
  }, []);
  
  if (error) {
    return <p>Error</p>
  } 

  // Fonction permettant de switcher entre page utilisateur et post.
  // La valeur param prend l'action à faire, le newUserScope la valeur de l'utilisateur ciblé.
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

  // FilteredPosts permet d'avoir une valeur filtrée des post en fonction de la valeur de la searchbar
  const filteredPosts = postsList?.filter((post) =>
  inputValue ? post.title.toLowerCase().includes(inputValue.toLowerCase()) : true
);


  return (
    <div className={styles.global}>
      <h1>Social<br/>Opinion</h1>
      { isDataLoading ? (
      <div> Chargement </div>
      ) : (
        <div>

          <section style={{display : postsVisibility ? 'block' : 'none'}}>

            <h2>Tous les Posts</h2>
            <input onChange= {(event) => setInputValue(event.target.value)} value={inputValue} type="text" id="searchbar" name="searchbar" placeholder='Rechercher un post'/>

            <div>
              {filteredPosts?.length === 0 ? (
                <p className={styles.noResult}>Aucun résultat, changez votre recherche.</p>
                ) : (
                filteredPosts?.map((post) => (
                  <Post
                    onClick={() => switchPostsUser('userON', post.userId, postsList)}
                    key={post.id}
                    title={post.title}
                    author={usersList?.find((user) => user.id === post.userId)?.username || ''}
                    body={post.body}
                  />
                ))
              )}
            </div>

          </section>


          <section style={{display : userVisibility ? 'block' : 'none'}}>

              <button className={styles.switchButton} onClick={() => switchPostsUser('postsON', 1, postsList)}>Revenir sur les posts</button>

                <Profile informations={usersList?.find((user) => user.id === userScope)}/>

              <div>
              {userPosts?.map((post) => (
                <Post
                key={post.id} 
                title={post.title} 
                author={usersList?.filter((user) => user.id === post.userId)[0].username} 
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
