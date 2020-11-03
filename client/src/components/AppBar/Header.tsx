import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LanguageSwitcher } from 'src/components/AppBar'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            flexGrow: 1
        }
    },
    headerOptions: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly'
    }
}))

const Header = () => {

    const { t } = useTranslation()
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

    const handleMenu = (e: any) => {
        setAnchorEl(e.currentTarget)
    }

    const handleMenuClick = () => {
        setAnchorEl(null)
    }

    const menuItems = [
        {
            menuTitle: t('basic.home'),
            pageURL: '/'
        },
        {
            menuTitle: t('basic.lots'),
            pageURL: '/lots'
        }
    ]

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {t('app.name')}
            </Typography>
            {isMobile ? (
              <>
                <LanguageSwitcher />
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                  keepMounted
                  transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem
                                    return (
                                      <MenuItem key={pageURL} onClick={() => handleMenuClick()}>
                                        <Link to={pageURL}>{menuTitle}</Link>
                                      </MenuItem>
                                    )
                                })}
                </Menu>
              </>
                    ) : (
                      <>
                        <div className={classes.headerOptions}>
                          {menuItems.map(menuItem => {
                                        const { menuTitle, pageURL } = menuItem
                                        return (
                                          <Button key={pageURL} variant='contained'>
                                            <Link to={pageURL}>{menuTitle}</Link>
                                          </Button>
                                        )
                                    })}
                        </div>
                        <LanguageSwitcher />
                      </>
                        )}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header
