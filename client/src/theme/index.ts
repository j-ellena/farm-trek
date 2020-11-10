import { Theme, ThemeOptions, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles/'
import { lime } from '@material-ui/core/colors'

const getTheme = (prefersDarkMode: boolean = true): Theme => {

    const buildOptions = (): ThemeOptions => ({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: lime[600]
            }
        },
    })

    const unresponsiveTheme = createMuiTheme(buildOptions())
    const theme = responsiveFontSizes(unresponsiveTheme)
    return theme
}

export default getTheme
