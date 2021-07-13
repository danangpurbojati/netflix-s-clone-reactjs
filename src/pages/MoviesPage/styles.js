import styled from 'styled-components/macro';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Pagination from '@material-ui/lab/Pagination';

export const CustomSelect = styled(Select)`
    .MuiInput-underline:before{
        border-bottom: none
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before{
        border-bottom: none
    }

    .MuiInput-underline:after{
        border-bottom: none
    }
`;

export const PageWrapper = styled.div`
    margin-top: 100px;
`;

export const CustomGenre = styled(Chip)`
    min-width: 70px;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: ${props => props.active ? 'red' : 'inherit'};
    color: ${props => props.active ? 'white' : 'red'};
`;

export const CustomPagination = styled(Pagination)`
    display: flex;
    justify-content: center;

    .MuiPaginationItem-root{
        color: white;
    }
`;
