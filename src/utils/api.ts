import axios, { AxiosResponse } from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com'
export const UserPostsEndpoints = {
  USERS: '/users',
  POSTS: '/posts'
}

function getResponseData<T extends object>(response: AxiosResponse<T>): T {
  return response.data;
}

export const getSimpleEndpoint = <T extends object>(endpoint: string) : Promise<T> => {
  return axios
  .get(BASE_URL + endpoint)
  .then((response) => getResponseData(response))
  .catch((error) => {
    console.log(error.response);
    throw error;
  })
}

export const getUsers = <T extends object>() : Promise<T> => {
  return getSimpleEndpoint(UserPostsEndpoints.USERS)
}


export const getUser = <T extends object>(userId: string) : Promise<T> => {
  return axios
  .get(`${BASE_URL + UserPostsEndpoints.USERS}/${userId}`)
  .then((response) => getResponseData(response))
  .catch((error) => {
    console.log(error.response);
    throw error;
  })
}

export const getPostsByUserId = <T extends object>(userId: string) : Promise<T> => {
  return axios
  .get(`${BASE_URL + UserPostsEndpoints.POSTS}/?userId=${userId}`)
  .then((response) => getResponseData(response))
  .catch((error) => {
    console.log(error.response);
    throw error;
  })
}
