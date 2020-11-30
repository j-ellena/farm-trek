import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStylesLanguageSwitcher = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            '& .MuiInputLabel-formControl': {
                left: '25%',
            }
        }
    }),
)

export default useStylesLanguageSwitcher
