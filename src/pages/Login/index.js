import React from 'react'
import Hero from '../../components/Hero';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CustomInput, AuthButton, AuthWrapper, AuthCard, AuthCardContent, AuthForm, AuthLink } from './styles';


const Login = () => {
    return (
        <Hero>
            <AuthWrapper>
                <Container maxWidth="xs">
                    <AuthCard>
                        <AuthCardContent>
                            <Typography variant="h4" gutterBottom>
                                Sign In
                            </Typography>
                            <AuthForm>
                                <CustomInput 
                                    fullWidth
                                    variant="filled"
                                    label="Email Address"
                                    type="email"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                />
                                <CustomInput 
                                    fullWidth
                                    variant="filled"
                                    label="Password"
                                    type="password"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                />

                                <AuthButton size="large" color="secondary" variant="contained" fullWidth>Sign In</AuthButton>
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
