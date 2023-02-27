export type TUsersResponse = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string,
        catFchPhrase: string,
        bs: string
    };
}

export const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((response => {
        return response;
    })).catch(err => {
        console.log(err);
    })
}