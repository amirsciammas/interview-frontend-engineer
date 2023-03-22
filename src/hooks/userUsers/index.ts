import { useEffect, useState } from "react"
import { getUsers } from "../../api";
import { User, Response } from "../../types";


type useUserProps = {
    users: Response<User[]> | undefined;
    isPending: boolean;
}

export const useUsers = (): useUserProps => {
    const [users, setUsers] = useState<Response<User[]>>();
    const [isPending, setIsPending] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setIsPending(true);
            const users = await getUsers();
            setIsPending(false);
            setUsers(users)
        })()

    }, [])

    return { users, isPending }

}