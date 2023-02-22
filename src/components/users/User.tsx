import { useState, useEffect } from 'react';
import './user.css';
import axios from 'axios';
import Card from './Card';
import Loader from '../spinner/Loader';
import Error from '../errors/Error';

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: string;
  website?: string;
  company?: object;
}

const User = () => {
  const [userList, setUserList] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getUsers();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    try {
      setLoading(true);
      const result = await axios.get('http://jsonplaceholder.typicode.com/users');
      if (result?.status === 200 && result?.statusText === 'OK') {
        if (result?.data && Array.isArray(result?.data) && result?.data.length > 0) {
          setUserList(result.data);
        } else {
          setUserList([]);
          setError('Issue fetching users. Try again later.')
        }
      }
      setLoading(false);
    } catch (error: any) {
      setUserList([]);
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error title="Encountered error" body={error} />}
      {!loading && !error && userList && userList.length > 0 && 
        <div className='user-container'>
          <>
            {userList.map((user: any, idx: number) => 
              <div key={user?.id + idx}>
                <Card data={user} />
              </div>
            )}
          </>
        </div>}
    </div>
  )
}

export default User;