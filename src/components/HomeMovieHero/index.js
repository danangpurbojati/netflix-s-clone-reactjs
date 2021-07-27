import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StarIcon from '@material-ui/icons/Star';
import { FlexWrapper, MovieHeroContent, MovieHeroImage, MovieHeroWrapper, MovieTextWrapper, YearText } from './style';
import { discoverMovies } from '../../api/movies';

const HomeMovieHero = () => {
    const history = useHistory();
    const [movie, setMovie] = useState({});

    const fetchHeroMovie = async () => {
        try {
            const { data } = await discoverMovies();
            setMovie(data.results[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchHeroMovie();
    }, [])

    console.log(movie);
    return (
        <MovieHeroWrapper>
            <MovieHeroImage src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie" />
            <MovieHeroContent>
                <Container maxWidth="lg">
                    <MovieTextWrapper>
                        <Typography variant="h4" gutterBottom>{movie.title}</Typography>
                        <Typography gutterBottom>{movie.overview}</Typography>
                        {/* <Typography variant="caption">Genre: Horror, Comedi, Sci-FI</Typography> */}
                        <FlexWrapper>
                            <YearText>{moment(movie.release_date).format("MMM Do YY")}</YearText>
                            <YearText>|</YearText>
                            <FlexWrapper>
                                <Typography>{movie.vote_average}</Typography>
                                <StarIcon fontSize="small" />
                            </FlexWrapper>
                        </FlexWrapper>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            startIcon={<PlayArrowIcon />}
                            onClick={() => history.push(`/movie-detail/${movie.id}`)}
                        >
                            Watch Now                        
                        </Button>
                    </MovieTextWrapper>

                </Container>
            </MovieHeroContent>
        </MovieHeroWrapper>
    )
}

export default HomeMovieHero
