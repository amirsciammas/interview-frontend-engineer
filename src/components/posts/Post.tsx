import { useState, useEffect } from 'react';
import axios from 'axios';
import './post.css';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../errors/Error';
import Loader from '../spinner/Loader';

type PostDetail = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Post = () => {
    let { userName, userId } = useParams();
    const navigate = useNavigate();
    const [postDetail, setPostDetail] = useState<PostDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
  
    useEffect(() => {
        getPost();
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userName, userId]);
  
    const getPost = async () => {
      try {
        setLoading(true);
        const result = await axios.get('http://jsonplaceholder.typicode.com/posts?userId=' + userId);
        if (result?.status === 200) {
          if (result?.data && Array.isArray(result?.data) && result?.data.length > 0) {
            setPostDetail(result.data);
          } else {
            setPostDetail([]);
            setError('Issue fetching users. Try again later.')
          }
        }
        setLoading(false);
      } catch (error: any) {
        setPostDetail([]);
        setLoading(false);
        setError(error.message);
      }
    }

  return (
    <div data-testid='test-post'>
        {loading && <Loader />}
        {error && <Error title="Encountered error" body={error} />}
        {!loading && !error && postDetail && Array.isArray(postDetail) && postDetail.length > 0 && 
            <div>
                <div className='post-btn-wrapper'>
                    <button className='post-backbtn' onClick={() => navigate('/')}>
                      Back to users
                    </button>
                </div>
                <div className='postuser-detail'>
                  Posts by {userName}
                </div>
                <>
                  {postDetail.map((post: any, idx: number) => (
                    <div className='post-container' key={post?.id + idx}>
                      <div className='post-title'>
                        {post?.title}
                      </div>
                      <div className='post-detail'>
                        {post?.body}
                      </div>
                    </div>
                  ))}
                </>
            </div>
        }
    </div>
  )
}

export default Post;