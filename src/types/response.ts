
export type Response<T> = {
    isError: boolean
    data: T
    message?: string
}