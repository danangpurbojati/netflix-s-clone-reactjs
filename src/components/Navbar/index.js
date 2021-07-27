import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import netflixLogo from '../../assets/images/Netflix-logo.svg'
import { MenuWrapper, MenuLink, CustomAppBar, UserWrapper, UserDropdown, UserSubAvatar, UserAvatar, UserLogOut, UserInfoWrapper, CustomDrawer } from './styles';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../features/Auth/actions';

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { auth, profile } = useSelector(state =>  state.firebase);
    const [ openMenu, setOpenMenu ] = useState(false);

    const clickNavbar = () => {
        setOpenMenu(true);
    }

    const closeMenu = () => {
        setOpenMenu(false);
    }

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpenMenu(false);
    };

    const handleLogout = (event) => {
        event.preventDefault();

        dispatch(signOut());
    }

    return (
        <CustomAppBar position="absolute" color="transparent">
            <Toolbar>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <MenuWrapper>
                            <MenuLink to="/">
                                <img style={{width: '100px'}} src={netflixLogo} alt="logo" />
                            </MenuLink>
                            {
                                auth.uid && (
                                    <Hidden smDown>
                                        <MenuLink to="/home">
                                            Home
                                        </MenuLink>
                                        <MenuLink to="/movies">
                                            Movies
                                        </MenuLink>
                                    </Hidden>
                                )
                            }
                        </MenuWrapper>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {
                                auth.uid && (
                                    <Hidden mdUp>
                                        <UserAvatar onClick={clickNavbar} variant="square">
                                            <MenuIcon />
                                        </UserAvatar>

                                        <CustomDrawer onClose={toggleDrawer} anchor="bottom" open={openMenu}>
                                            <div style={{ textAlign: 'right'}}>
                                                <IconButton onClick={closeMenu}>
                                                    <CloseIcon style={{color: 'white'}} />
                                                </IconButton>
                                            </div>
                                            <List>
                                                <ListItem style={{justifyContent: 'flex-end'}}>
                                                    <MenuLink onClick={closeMenu} to="/home">
                                                        Menu
                                                    </MenuLink>
                                                </ListItem>
                                                <ListItem style={{justifyContent: 'flex-end'}}>
                                                    <MenuLink onClick={closeMenu} to="/movies">
                                                        Movies
                                                    </MenuLink>
                                                </ListItem>                                        
                                            </List>
                                        </CustomDrawer>
                                    </Hidden>
                                )
                            }
                            {
                                auth.uid ? (
                                    <>
                                        <UserWrapper>
                                            {
                                                profile.fullname && <UserAvatar variant="square">{profile.fullname.charAt(0)}</UserAvatar>
                                            }
                                            <UserDropdown>
                                                <UserInfoWrapper>
                                                    {
                                                        profile.fullname && <UserSubAvatar variant="square">{profile.fullname.charAt(0)}</UserSubAvatar>
                                                    }
                                                    <Typography variant="body1">{profile.fullname}</Typography>
                                                </UserInfoWrapper>
                                                <UserLogOut onClick={handleLogout}>Sign Out</UserLogOut>
                                            </UserDropdown>
                                        </UserWrapper>                                    
                                    </>
                                ) : (
                                    <Button onClick={() => history.push("/login")} variant="contained" color="secondary">Sign In</Button>
                                )
                            }
                        </div>
                    </Grid>
                </Container>
            </Toolbar>
        </CustomAppBar>
    )
}

export default Navbar
