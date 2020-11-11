import { useEffect, useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useThemeMode = () : [boolean, () => void] => {

    const localStorageKey = 'theme'
    const localStorageValues = {
        dark: 'dark',
        light: 'light'
    }
    const { dark, light } = localStorageValues

    const useLocalStorage = (initialValue: any) => {
        const getInitial = () => {
            const previouslyStored = window.localStorage.getItem(localStorageKey)
            return previouslyStored || initialValue
        }
        const [storedValue, setStoredValue] = useState(getInitial)
        const setValue = (value: string) => {
            window.localStorage.setItem(localStorageKey, value)
            setStoredValue(value)
        }
        return [storedValue, setValue]
    }

    const [isDark, setIsDark] = useState<boolean>(false)
    const [localTheme, setLocalTheme] = useLocalStorage(null)

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const toggleTheme = () => {
        setIsDark(!isDark)
        setLocalTheme(isDark ? light : dark)
    }

    useEffect(() => {
        window.localStorage.removeItem(localStorageKey)
        setIsDark(prefersDarkMode)
    }, [prefersDarkMode])

    useEffect(() => {
        setIsDark(localTheme === dark)
    }, [localTheme])

    useEffect(() => {
        setIsDark(localTheme ? localTheme === dark : prefersDarkMode)
    }, [])

    return [isDark, toggleTheme]
}

export default useThemeMode