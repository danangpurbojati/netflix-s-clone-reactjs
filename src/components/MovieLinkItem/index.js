import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CustomCard, MovieImage } from './styles';

import { Link } from 'react-router-dom';

const MovieLinkItem = ({movie}) => {
    return (
        <Link to={`/movie-detail/${movie.id}`} style={{textDecoration: 'none'}}>
            <CustomCard>
                <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="john" />
                <Typography align="center">{movie.title}</Typography>
            </CustomCard>
        </Link>
    )
}

export default MovieLinkItem
