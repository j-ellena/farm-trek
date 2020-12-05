import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { yellow, indigo, blue, lightBlue } from '@material-ui/core/colors'
import { dark } from 'src/theme'

const gradientDark = `linear-gradient(${indigo[900]}, ${blue[600]})`
const gradientLight = `linear-gradient(${lightBlue[900]}, ${lightBlue[300]})`
const transition = 'all 0.7s linear'

const visiblePosition = 'translate(0, 0)'
const hiddenAbove = 'translate(25px, -100px)'
const hiddenBelow = 'translate(-25px, 100px)'

const useStylesThemeSwitcher = makeStyles((theme: Theme) => createStyles({
    toggleButton: {
        background: theme.palette.type === dark ? gradientDark : gradientLight,
        borderRadius: theme.spacing(4),
        height: theme.spacing(4),
        overflow: 'hidden',
    },
    darkIcon: {
        color: yellow[800],
        transition,
        transform: theme.palette.type === dark ? visiblePosition : hiddenAbove
    },
    lightIcon: {
        color: yellow[500],
        transition,
        transform: theme.palette.type === dark ? hiddenBelow : visiblePosition
    }
}))

export default useStylesThemeSwitcher
