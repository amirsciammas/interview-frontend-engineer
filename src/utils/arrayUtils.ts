const findValueInList = <T>(list: T[], key: keyof T, value: number | string) => {
    return list.find((item) => item[key] === value)
}

export { findValueInList }