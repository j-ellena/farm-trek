import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles/'
import { lime } from '@material-ui/core/colors'

const unresponsiveFontsTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: lime[600]
        }
    }
})

const theme = responsiveFontSizes(unresponsiveFontsTheme)

export default theme
