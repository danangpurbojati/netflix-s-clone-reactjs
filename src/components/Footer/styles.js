import styled from 'styled-components/macro';
import LanguageIcon from '@material-ui/icons/Language';

export const FooterWrapper = styled.footer`
    margin: 24px 0;
`;

export const SelectWrapper = styled.div`
    position: relative;
    margin: 24px 0;
`;

export const SelectIcon = styled(LanguageIcon)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    z-index: 2;
`

export const CustomSelect = styled.select`
    color: #fff;
    border: 1px solid #fff;
    background-color: #000;
    padding: 16px 44px;
    border-radius: 4px;

    position: relative;

`;

export const CustomOption = styled.option`
    background-color: inherit;
`;