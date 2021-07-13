import styled from 'styled-components/macro';

export const MoviePageWrapper = styled.div`
    margin-top: 100px;
`;

export const ImageThumbnail = styled.img`
    width: 100%;
    /* height: 450px; */
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const TextWrapper = styled.div`
    margin-top: 24px;
`;

export const VideoWrapper = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 32px;
`;

export const VideoStyle = styled.iframe`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;