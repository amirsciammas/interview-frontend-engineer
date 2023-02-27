export type TpostsProps = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const getPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then((response) => {
        return response;
    }).catch(error => {
        console.log(error)
    })
}