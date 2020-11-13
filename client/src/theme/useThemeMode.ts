import { useEffect, useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { themeKey, PaletteType, dark, light } from 'src/theme'
import { useLocalStorage } from 'src/utils'

const useThemeMode = (): [boolean, () => void] => {

    const [isDark, setIsDark] = useState<boolean>(false)
    const [localTheme, setLocalTheme] = useLocalStorage<PaletteType | null>(themeKey, null)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true })
    let isInitialUser = false

    const useBeforeFirstRender = (f: any) => {
        const [hasRendered, setHasRendered] = useState(false)
        useEffect(() => setHasRendered(true), [hasRendered])
        if (!hasRendered) {
            f()
        }
    }

    const doBeforeFirstRender = () => {
        isInitialUser = !!localTheme
    }

    useBeforeFirstRender(doBeforeFirstRender)

    const toggleTheme = () => {
        setIsDark(!isDark)
        setLocalTheme(isDark ? light : dark)
    }

    useEffect(() => {
        setIsDark(localTheme ? localTheme === dark : prefersDarkMode)
    }, [])

    useEffect(() => {
        if (!(isInitialUser)) {
            window.localStorage.removeItem(themeKey)
            setIsDark(prefersDarkMode)
        }
    }, [prefersDarkMode])

    return [isDark, toggleTheme]
}

export default useThemeMode
