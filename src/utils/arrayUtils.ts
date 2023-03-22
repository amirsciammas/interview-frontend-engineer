const findValueInList = <T>(list: T[], key: keyof T, value: number | string): T | undefined => {
    return list.find((item) => item[key] === value)
}

const filterValueInList = <T>(list: T[], key: keyof T, value: number | string): T[] => {
    return list.filter((item) => item[key] === value)
}

export { findValueInList, filterValueInList }