import Divider from '@material-ui/core/Divider';
import styled from 'styled-components/macro';

export const HeroTextWrapper = styled.div`
    color: white;
    width: 80%;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const CustomDivider = styled(Divider)`
    height: 10px;
    background-color: #3f3f3f;
`;