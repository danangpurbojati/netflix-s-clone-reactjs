import styled from 'styled-components/macro';
import Typography from '@material-ui/core/Typography';

export const MovieHeroWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const MovieHeroImage = styled.img`
    width: 100%;
    height: 90vh;
    color: black;
    object-fit: cover;
    object-position: center;
    filter: brightness(35%);
`;

export const MovieHeroContent = styled.div`
    position: absolute;
    top: 15%;
    width: 100%;
`; 

export const MovieTextWrapper = styled.div`
    max-width: 460px;
`;

export const FlexWrapper = styled.div`
    display: flex;
    margin-bottom: 4px;
`;

export const YearText = styled(Typography)`
    margin-right: 16px;
`;
