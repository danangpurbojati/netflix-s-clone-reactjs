import styled from 'styled-components/macro';

export const HeroWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(40%);
`;