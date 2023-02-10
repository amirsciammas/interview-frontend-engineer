import './App.css';
import {useState,useEffect} from 'react';
function App() {

  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState({});
  const [currentUser,setCurrentUser] = useState(null);


  useEffect(()=>{

    //get users data
    fetch('http://jsonplaceholder.typicode.com/users').then(async response => {
      const result = await response.json()
      setUsers(result);
    })

    //get posts data
    fetch('http://jsonplaceholder.typicode.com/posts').then(async response => {
      const result = await response.json()
      const groupedPosts = {};//group posts by userId
      result.forEach(post => {
        if(groupedPosts[post.userId])
        groupedPosts[post.userId].push(post);
        else
        groupedPosts[post.userId] = [post];

      });
      setPosts(groupedPosts);
    })
  },[])

  const onClickHandler = (user) => {
    setCurrentUser(user)
  }
  
  return (
   
  <div className='flex'>
    <div className='w-50'>
      <h3 className='text-align-center'>USERS</h3>
      <p className='info-text text-align-center'>Click on the user's card to view posts</p>
      <ul>
        {
          users.map(user => 
         ( <li key={user.id} onClick={() => onClickHandler(user)} data-testid='user'>
              <div className='flex'>
                <span className='w-50'>User Name :</span>
                <span className='w-50'>{user.name}</span>
              </div>
              <div className='flex'>
                <span  className='w-50'>Phone :</span>
                <span  className='w-50'>{user.phone}</span>
              </div>
              <div className='flex'>
                <span className='w-50'>Email :</span>
                <span className='w-50'>{user.email}</span>
              </div>
            </li>))
        }
      </ul>
    </div>
    { currentUser && <div className='w-50'>
      <h3 className='text-align-center'>{currentUser.name}'s Posts</h3>
      <ul>
        {
          posts?.[currentUser.id].map(post => 
          ( <li key={post.id} data-testid='post'>
            <h5 className='text-align-center'>{post.title}</h5>
            <p>{post.body}</p>
          </li>))
        }
      </ul>
    </div>}
  </div>
   
  );
}

export default App;
