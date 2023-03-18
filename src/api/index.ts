import axios, { AxiosError, AxiosResponse } from "axios";
import { User, Response, Post } from "../types";
import { POSTS, USERS } from "./urls"

const get = async <T>(url: string) => {
    return await axios.get<T>(url);
}

const getUsers = async (): Promise<Response<User[]>> => {
    let response: AxiosResponse<User[], any>
    try {
        response = await get<User[]>(USERS);
        return resolveResponse<User[]>(response);
    } catch (err: unknown | AxiosError) {
        return resolveErrorResponse(err);
    }
}

const getPosts = async (): Promise<Response<Post[]>> => {
    const response = await get<Post[]>(POSTS);
    return resolveResponse(response);
}

const resolveErrorResponse = (err: unknown | AxiosError) => {
    if (axios.isAxiosError(err)) {
        return { isError: true, data: [], message: err.message }
    }
    return { isError: true, data: [], message: "" }
}


const resolveResponse = <T>(response: AxiosResponse): Response<T> => {
    if (response.status === 200) {
        return { isError: false, data: response.data }
    }
    return { isError: true, data: response.data }
}


export { getUsers, getPosts }