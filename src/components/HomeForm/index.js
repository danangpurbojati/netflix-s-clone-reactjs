import React from 'react';
import { CustomInput, CustomForm, InputWrapper, CustomButton, FormContent } from './styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

const HomeForm = () => {
    return (
        <CustomForm>
            <Typography gutterBottom align="center" variant="h6">
                Ready to watch? Enter your email to create or restart your membership.
            </Typography>
            <FormContent>
                <InputWrapper>
                    <CustomInput 
                        label="Email address"
                        fullWidth
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

export default HomeForm
