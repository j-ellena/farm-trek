import { Theme, ThemeOptions, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles/'
import { lime } from '@material-ui/core/colors'
import { dark, light } from 'src/theme'

const getTheme = (isDark: boolean): Theme => {

    const buildOptions = (): ThemeOptions => ({
        palette: {
            type: isDark ? dark : light,
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
