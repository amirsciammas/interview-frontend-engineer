import axios, { AxiosResponse } from "axios";
import { User, Response, Post } from "../types";
import { POSTS, USERS } from "./urls"

const get = async <T>(url: string) => {
    return await axios.get<T>(url);
}

const getUsers = async (): Promise<Response<User[]>> => {
    const response = await get<User[]>(USERS);
    return resolveResponse<User[]>(response);
}

const getPosts = async (): Promise<Response<Post[]>> => {
    const response = await get<Post[]>(POSTS);
    return resolveResponse(response);
}

const resolveResponse = <T>(response: AxiosResponse): Response<T> => {
    if (response.status === 200) {
        return { isError: false, data: response.data }
    }
    return { isError: true, data: response.data }
}


export { getUsers, getPosts }