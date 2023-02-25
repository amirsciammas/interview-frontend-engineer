import { useState, useEffect } from 'react';
import { IPost } from '../../../common/types';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

export const SelectedPost = () => {
  const { id } = useParams();
  const { data, loading, isApiSuccess } = useFetch<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {} as IPost
  );

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
