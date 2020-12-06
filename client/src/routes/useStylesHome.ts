import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStylesHome = makeStyles((theme: Theme) =>
    createStyles({
        '@keyframes logoSpin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' }
        },
        logo: {
            width: theme.spacing(24),
            height: theme.spacing(24),
            [theme.breakpoints.down('sm')]: {
                width: theme.spacing(12),
                height: theme.spacing(12),
            },
            [theme.breakpoints.up('lg')]: {
                width: theme.spacing(42),
                height: theme.spacing(42),
            },
            pointerEvents: 'none',
            animation: '$logoSpin infinite 20s linear',
        },
    }),
)

export default useStylesHome
