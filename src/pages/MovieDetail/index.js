import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { ImageThumbnail, MoviePageWrapper, RatingWrapper, TextWrapper, VideoStyle, VideoWrapper } from './styles';
import { useParams } from 'react-router-dom';
import { detailMovie } from '../../api/movies';

const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    const getDetailMovie = async (id) => {
        const { data } = await detailMovie(id);
        setMovie(data);
    }

    useEffect(() => {
        getDetailMovie(id);
    }, [id]);

    return (
        <MoviePageWrapper>
            {
                movie ? (
                    <Container maxWidth="md">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <ImageThumbnail src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <div>
                                        <Typography variant="h5">{movie.title}</Typography>
                                        <Typography>{movie.release_date}</Typography>
                                    </div>
                                    <RatingWrapper>
                                        <Typography variant="h5">{movie.vote_average}</Typography>
                                        <StarIcon />
                                    </RatingWrapper>
                                </Grid>

                                <TextWrapper>
                                    <Typography gutterBottom variant="h6">
                                        Overview
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle2">
                                       {
                                           movie.overview
                                       }
                                    </Typography>
                                </TextWrapper>


                                <TextWrapper>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <Typography variant="subtitle2">
                                                Genres :
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2">
                                                {movie.genres.map(genre => (
                                                    <span key={genre.id}>{genre.name}, </span>
                                                ))}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <Typography variant="subtitle2">
                                                Stars :
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2">
                                                {movie.credits.cast.map(cast => (
                                                    <span key={cast.id}>{cast.name}, </span>
                                                ))}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TextWrapper>

                            </Grid>
                        </Grid>

                        {
                            movie.videos.results.length > 0 && (
                                <VideoWrapper>
                                    <VideoStyle src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}>
                                    </VideoStyle>
                                </VideoWrapper>
                            )
                        }
                        
                    </Container>
                ) : (
                    <Typography variant="h5" align="center">Loading . . .</Typography>
                )
            }
        </MoviePageWrapper>
    )
}

export default MovieDetail
