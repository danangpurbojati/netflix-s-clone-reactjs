import React, { useState } from 'react'
import Hero from '../../components/Hero';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CustomInput, AuthButton, AuthWrapper, AuthCard, AuthCardContent, AuthForm, AuthLink, AuthAlert } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { signIn } from '../../features/Auth/actions';

import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state.firebase);
    const errorAuth = useSelector(state => state.auth);

    const [credentials, setcredentials] = useState({
        email: '',
        password: ''
    });
    const [buttonDisable, setButtonDisable] = useState(false);

    const onChangeHandler = event => {
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setButtonDisable(true);
        dispatch(signIn(credentials));
        
        if (isLoaded(auth) && !isEmpty(auth)) {
            history.push('/home');
            setcredentials({
                email: '',
                password: ''
            });
        }
        setButtonDisable(false);
        
    }

    return (
        <Hero>
            <AuthWrapper>
                <Container maxWidth="xs">
                    <AuthCard>
                        <AuthCardContent>
                            <Typography variant="h4" gutterBottom>
                                Sign In
                            </Typography>
                            {
                                errorAuth.loginError && (
                                    <AuthAlert severity="error">
                                        {errorAuth.loginError}
                                    </AuthAlert>
                                )
                            }
                            <AuthForm onSubmit={handleSubmit}>
                                <CustomInput 
                                    fullWidth
                                    required
                                    variant="filled"
                                    label="Email Address"
                                    type="email"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    name="email"
                                    value={credentials.email}
                                    onChange={onChangeHandler}
                                />
                                <CustomInput 
                                    fullWidth
                                    required
                                    variant="filled"
                                    label="Password"
                                    type="password"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    name="password"
                                    value={credentials.password}
                                    onChange={onChangeHandler}
                                />

                                <AuthButton disabled={buttonDisable} type="submit" size="large" color="secondary" variant="contained" fullWidth>
                                    {buttonDisable ? 'Waiting To Sign In' : 'Sign In' }
                                </AuthButton>
                            </AuthForm>

                            <Typography gutterBottom>
                                New to Newflix? <AuthLink to="/register">Sign up now</AuthLink>
                            </Typography>
                        </AuthCardContent>
                    </AuthCard>
                </Container>
            </AuthWrapper>
        </Hero>
    )
}

export default Login
