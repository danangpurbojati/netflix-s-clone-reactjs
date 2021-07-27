import React, { useState } from 'react'
import Hero from '../../components/Hero';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CustomInput, AuthButton, AuthWrapper, AuthCard, AuthCardContent, AuthForm, AuthAlert } from '../Login/styles';
import { setEmail, signUp } from '../../features/Auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const { email, registerError } = useSelector(state => state.auth);
    const { auth } = useSelector(state => state.firebase);
    const history = useHistory();

    const [newUser, setNewUser] = useState({
        fullname: '',
        password: ''
    });

    const [buttonDisable, setButtonDisable] = useState(false);

    const onChangeHandler = event => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setButtonDisable(true);

        const data ={ 
            fullname: newUser.fullname,
            email,
            password: newUser.password
        };
        
        dispatch(signUp(data));
            
        if (isLoaded(auth) && !isEmpty(auth)) {
            history.push('/home');
            setNewUser({
                fullname: '',
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
                                Register
                            </Typography>
                            {
                                registerError && (
                                    <AuthAlert severity="error">
                                        {registerError}
                                    </AuthAlert>
                                )
                            }
                            <AuthForm onSubmit={onSubmitHandler}>
                                <CustomInput 
                                    fullWidth
                                    variant="filled"
                                    label="Fullname"
                                    type="text"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    required
                                    name="fullname"
                                    // ref={fullnameRef}
                                    value={newUser.fullname}
                                    onChange={onChangeHandler}
                                />
                                <CustomInput 
                                    fullWidth
                                    variant="filled"
                                    label="Email Address"
                                    type="email"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={(e) => dispatch(setEmail(e.target.value))}
                                />
                                <CustomInput 
                                    fullWidth
                                    variant="filled"
                                    label="Password"
                                    type="password"
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    required
                                    name="password"
                                    // ref={passwordRef}
                                    value={newUser.password}
                                    onChange={onChangeHandler}
                                />

                                <AuthButton disabled={buttonDisable} type="submit" size="large" color="secondary" variant="contained" fullWidth>Register</AuthButton>
                            </AuthForm>
                        </AuthCardContent>
                    </AuthCard>
                </Container>
            </AuthWrapper>
        </Hero>
    )
}

export default Register
