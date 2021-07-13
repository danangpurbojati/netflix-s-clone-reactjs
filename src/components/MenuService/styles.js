import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const GridContainer = styled(Grid)`
    margin: 32px 0;
`;

export const GridImage = styled(Grid)`
    position: relative;
`;

export const NormalImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const VideoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
`;

export const VideoTV = styled.video`
    object-fit: contain;
    position: absolute;
    width: 74%;
    height: 64%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -54%);
    z-index: 1;
`;

export const VideoWatch = styled.video`
    object-fit: contain;
    position: absolute;
    width: 60%;
    height: 64%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -75%);
    z-index: 1;
`;

export const DownloadWrapper = styled.div`
    display: flex;
    padding: 4px 6px;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #303030;
    max-width: 300px;
    height: 90px;
    border-radius: 4px;
    background-color: #000;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
`;

export const DownloadImage = styled.img`
    height: 100%;
    object-fit: cover;
`;

export const DownloadTextWrapper = styled.div`
    margin: 0 16px;
    width: 120px;
`;

export const DownloadTextTittle = styled(Typography)`
    font-weight: bold;
`;

export const DownloadSubTittle = styled(DownloadTextTittle)`
    color: #0071eb;
`