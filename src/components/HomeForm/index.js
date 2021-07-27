import React from 'react';
import { CustomInput, CustomForm, InputWrapper, CustomButton, FormContent } from './styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../features/Auth/actions';

const HomeForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { auth } = useSelector(state => state.firebase);
    
    const emailInput = event => {
        dispatch(setEmail(event.target.value));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push('/register');
    }
    return (
        <>
            {
                !auth.uid && (
                    <CustomForm onSubmit={onSubmitHandler}>
                        <Typography gutterBottom align="center" variant="h6">
                            Ready to watch? Enter your email to create or restart your membership.
                        </Typography>
                        <FormContent>
                            <InputWrapper>
                                <CustomInput 
                                    label="Email address"
                                    fullWidth
                                    onChange={emailInput}
                                />
                            </InputWrapper>
                            <CustomButton 
                                variant="contained" 
                                color="secondary"
                                type="submit"
                                endIcon={<ChevronRightIcon />}
                            >
                                Get Started
                            </CustomButton>
                        </FormContent>
                    </CustomForm>
    
                )
            }
        </>
    )
}

export default HomeForm
