import axios from "axios";
import { User } from "../types";
import { USERS } from "./urls"

const getUsers = () => axios.get<User>(USERS);


export { getUsers }