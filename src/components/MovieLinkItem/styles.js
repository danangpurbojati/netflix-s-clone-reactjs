import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';

export const CustomCard = styled(Card)`
    background-color: #000;
    color: #fff;
    border-radius: 0;
    margin-bottom: 24px;
`;

export const MovieImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
`;

export const GenreWrapper = styled.div`
    height: 50px;
    overflow: hidden;
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
`;