import styled from 'styled-components/macro';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const CustomForm = styled.form`
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
    margin: 16px auto;
`;

export const FormContent = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const InputWrapper = styled.div`
    padding: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-grow: 1;
    @media (max-width: 950px) {
        margin-bottom: 16px;
    }
`;

export const CustomInput = styled(TextField)`
    .MuiInput-underline:before{
        border-bottom: none
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before{
        border-bottom: none
    }

    .MuiInput-underline:after{
        border-bottom: none
    }

    .MuiFormLabel-root{
        line-height: 0;
    }

    .MuiInputLabel-shrink{
        font-weight: bold;
        transform: translate(0, 0.5px) scale(0.75);
    }

`;

export const CustomButton = styled(Button)`
    @media (max-width: 950px) {
        max-width: 250px;
        margin: 0 auto;
    }
`;