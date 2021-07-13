import styled from 'styled-components/macro';
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

export const AccordionMargin = styled.div`
    margin: 32px 0;
`;

export const CustomAccordion = styled(Accordion)`
    margin-top: 12px;
    background-color: #303030;
`;

export const AccordionTittle = styled(Typography)`
    color: #fff;
    font-weight: 600;
    letter-spacing: 1.2px;
`;

export const OpenIcon = styled(AddIcon)`
    color: #fff;
`;

export const CloseIcon = styled(ClearIcon)`
    color: #fff;
`;