import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

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

