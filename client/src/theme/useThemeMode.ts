import { useMemo } from 'react'
import { getTheme } from 'src/theme'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const useThemeMode = () => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = useMemo(
        () => getTheme(prefersDarkMode),
        [prefersDarkMode],
    )

    return [theme]

}

export default useThemeMode