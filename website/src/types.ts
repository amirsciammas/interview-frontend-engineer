import { TpostsProps } from "./Services/posts"
import { TUsersResponse } from "./Services/users"

export type TactionsTypes = | {
    type: "SET_USERS",
    data: TUsersResponse[]
} |
{
    type: "SET_POSTS",
    data: TpostsProps[]
}
