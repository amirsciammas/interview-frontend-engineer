import axios from "axios";
import { User, Response } from "../types";
import { USERS } from "./urls"


const getUsers = async (): Promise<Response<User[]>> => {
    const response = await axios.get<User[]>(USERS)
    if (response.status === 200) {
        return { isError: false, data: response.data }
    }
    return { isError: true, data: response.data }

}


export { getUsers }