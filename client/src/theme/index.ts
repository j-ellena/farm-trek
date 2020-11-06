import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles/'

const unresponsiveFontsTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

const theme = responsiveFontSizes(unresponsiveFontsTheme)

export default theme
