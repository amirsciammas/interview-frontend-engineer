import { useState, useEffect } from 'react';
import axios from 'axios';
import './post.css';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../errors/Error';
import Loader from '../spinner/Loader';

type PostDetail = {
  [key: string]: any;
  id: number | null;
  userId: number | null;
  title: string | '';
  body: string | '';
}

const Post = () => {
    let { userId } = useParams();
    const navigate = useNavigate();
    const [postDetail, setPostDetail] = useState<PostDetail>({
        id: null,
        userId: null,
        title: '',
        body: ''
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
  
    useEffect(() => {
        getPost();
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);
  
    const getPost = async () => {
      try {
        setLoading(true);
        const result = await axios.get('http://jsonplaceholder.typicode.com/posts/' + userId);
        if (result?.status === 200 && result?.statusText === 'OK') {
          if (result?.data && Object.keys(result?.data) && Object.keys(result?.data).length > 0) {
            setPostDetail(result.data);
          } else {
            setPostDetail({
                id: null,
                userId: null,
                title: '',
                body: ''
            });
            setError('Issue fetching users. Try again later.')
          }
        }
        setLoading(false);
      } catch (error: any) {
        setPostDetail({
            id: null,
            userId: null,
            title: '',
            body: ''
        });
        setLoading(false);
        setError(error.message);
      }
    }

  return (
    <div data-testid='test-post'>
        {loading && <Loader />}
        {error && <Error title="Encountered error" body={error} />}
        {!loading && !error && (postDetail?.title || postDetail?.body) && 
            <div>
                <div className='post-btn-wrapper'>
                    <button className='post-backbtn' onClick={() => navigate('/')}>
                        Back to users
                    </button>
                </div>
                <div className='post-container'>
                    <div className='post-title'>
                        {postDetail?.title}
                    </div>
                    <div className='post-detail'>
                        {postDetail?.body}
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Post;