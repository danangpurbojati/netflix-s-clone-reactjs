import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';

export const CustomAppBar = styled(AppBar)`
    box-shadow: none;
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuLink = styled(Link)`
    margin-right: 16px;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
`;

export const UserDropdown = styled.div`
    display: none;
    min-width: 175px;
    flex-direction: column;
    /* padding: 8px; */
    background-color: black;
    position: absolute;
    top: 100%;
    right: 0;
`;

export const UserWrapper = styled.div`
    position: relative;
    &:hover > ${UserDropdown} {
        display: flex;
    }
`;

export const UserAvatar = styled(Avatar)`
    background-color: red;
    text-transform: uppercase;
    cursor: pointer;
    margin-left: 10px;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 8px;
`;

export const UserSubAvatar = styled(Avatar)`
    text-transform: uppercase;
    background-color: red;
    font-size: 14;
    height: 25px;
    width: 25px;
    margin-right: 8px;
`;

export const UserLogOut = styled.a`
    text-decoration: none;
    background-color: red;
    cursor: pointer;
    padding: 8px;
    transition: 0.2s;

    &:hover {
    background-color: #950000;
    }
`;

export const CustomDrawer = styled(Drawer)`
    .MuiPaper-root{
        background-color: black;
    }
`;

