import { IPost } from '../../../common/types';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

export const SelectedPost = () => {
  // to get the post id from the url that can be used to make API call
  const { id } = useParams();
  const { data, loading, isApiSuccess } = useFetch<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {} as IPost
  );

  // When the user tries to get the post that does not exist
  if (!isApiSuccess) {
    throw Error('Cannot find that post ');
  }
  if (loading) {
    return <p>Loading data....</p>;
  }
  return (
    <>
      <p>Post Id: {data.id}</p>
      <p>User Id: {data.userId}</p>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </>
  );
};
