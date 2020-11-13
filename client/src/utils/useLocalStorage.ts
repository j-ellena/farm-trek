import { useState } from 'react'

const useLocalStorage = <T>(key: string, initialValue: T): [T, (item: T) => void] => {

    const isType = (val: any): val is T => val as T !== undefined

    const getInitial = () => {
        const item = window.localStorage.getItem(key)
        return item && isType(item) ? item : initialValue
    }

    const [storedValue, setStoredValue] = useState(getInitial)

    const setValue = (value: T) => {
        const newValue = value instanceof Function ? value(storedValue) : value
        window.localStorage.setItem(key, newValue)
        setStoredValue(newValue)
    }

    return [storedValue, setValue]
}

export default useLocalStorage
