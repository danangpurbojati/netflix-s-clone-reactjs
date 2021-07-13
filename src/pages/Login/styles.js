import styled from 'styled-components/macro';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

export const AuthWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`;

export const AuthCard = styled(Card)`
    background-color: rgba(0,0,0,.75);
    color: #fff;
`;

export const AuthCardContent = styled(CardContent)`
    padding: 32px;
`;

export const AuthForm = styled.form`
    margin-bottom: 16px;
`;

export const CustomInput = styled(TextField)`
   background-color: #333;
   border-radius: 4px;
   margin-bottom: 24px;

   .MuiFormLabel-root{
       color: #8c8c8c;
   }

   .MuiInputBase-root{
       color: white;
   }
`;

export const AuthButton = styled(Button)`
    border-radius: 4px;
    margin-top: 24px;
`;

export const AuthLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover{
        text-decoration: underline
    }
`;




