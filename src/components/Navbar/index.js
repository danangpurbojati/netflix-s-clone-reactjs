import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import netflixLogo from '../../assets/images/Netflix-logo.svg'
import { MenuWrapper, MenuLink, CustomAppBar } from './styles';

import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    return (
        <CustomAppBar position="absolute" color="transparent">
            <Toolbar>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <MenuWrapper>
                            <MenuLink to="/">
                                <img style={{width: '100px'}} src={netflixLogo} alt="logo" />
                            </MenuLink>
                            <MenuLink to="/home">
                                Home
                            </MenuLink>
                            <MenuLink to="/movies">
                                Movies
                            </MenuLink>
                        </MenuWrapper>
                        <Button onClick={() => history.push("/login")} variant="contained" color="secondary">Sign In</Button>
                    </Grid>
                </Container>
            </Toolbar>
        </CustomAppBar>
    )
}

export default Navbar
