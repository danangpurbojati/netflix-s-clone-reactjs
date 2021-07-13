import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import tvImage from '../../assets/images/tv.png';
import kidImage from '../../assets/images/kid.png';
import watchImage from '../../assets/images/device-pile-id.png';
import downloadImage from '../../assets/images/mobile-0819.jpg';
import boxShot from '../../assets/images/boxshot.png';
import downloadGif from '../../assets/images/download-icon.gif';

import videoOne from '../../assets/videos/video-tv-0819.m4v';
import videoTwo from '../../assets/videos/video-devices-id.m4v';
import { DownloadImage, DownloadSubTittle, DownloadTextTittle, DownloadTextWrapper, DownloadWrapper, GridContainer, GridImage, NormalImage, VideoImage, VideoTV, VideoWatch } from './styles';

const MenuService = ({divider}) => {
    return (
        <div>
            <Container maxWidth="md">
                <GridContainer 
                    justifyContent="center"
                    alignItems="center" 
                    container 
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            Enjoy on your TV.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </Typography>
                    </Grid>
                    <GridImage item xs={12} sm={6}>
                        <VideoImage src={tvImage} alt="tv-section" />
                        <VideoTV autoPlay loop muted>
                            <source src={videoOne} type="video/mp4" />
                        </VideoTV>
                    </GridImage>
                </GridContainer>
            </Container>

            {divider}

            <Container maxWidth="md">
                <GridContainer 
                    justifyContent="center"
                    alignItems="center" 
                    container
                    direction="row-reverse" 
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            Download your shows to watch offline.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Save your favorites easily and always have something to watch.
                        </Typography>
                    </Grid>
                    <GridImage item xs={12} sm={6}>
                        <NormalImage src={downloadImage} alt="download-section" />
                        <DownloadWrapper>
                            <DownloadImage src={boxShot} alt="boxshot" />
                            <DownloadTextWrapper>
                                <DownloadTextTittle variant="subtitle2">
                                    Stranger Things
                                </DownloadTextTittle>
                                <DownloadSubTittle variant="caption">
                                    Downloading...
                                </DownloadSubTittle>
                            </DownloadTextWrapper>
                            <DownloadImage src={downloadGif} alt="download" />
                        </DownloadWrapper>
                    </GridImage>
                </GridContainer>
            </Container>

            {divider}

            <Container maxWidth="md">
                <GridContainer 
                    justifyContent="center"
                    alignItems="center" 
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            Watch everywhere.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </Typography>
                    </Grid>
                    <GridImage item xs={12} sm={6}>
                        <VideoImage src={watchImage} alt="watch-section" />
                        <VideoWatch autoPlay loop muted>
                            <source src={videoTwo} type="video/mp4" />
                        </VideoWatch>
                    </GridImage>
                </GridContainer>
            </Container>

            {divider}

            <Container maxWidth="md">
                <GridContainer 
                    justifyContent="center"
                    alignItems="center"
                    direction="row-reverse" 
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            Create profiles for kids..
                        </Typography>
                        <Typography  variant="h6" gutterBottom>
                            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                        </Typography>
                    </Grid>
                    <GridImage item xs={12} sm={6}>
                        <NormalImage src={kidImage} alt="kid-section" />
                    </GridImage>
                </GridContainer>
            </Container>

            {divider}

        </div>
    )
}

export default MenuService
