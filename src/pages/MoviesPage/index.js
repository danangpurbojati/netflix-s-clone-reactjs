import React, { useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MovieLinkItem from '../../components/MovieLinkItem';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PageWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, goToNextPage } from '../../features/Movies/actions';

const MoviesPage = () => {

    const dispatch = useDispatch();
    const { movies, totalPages, currentPage } = useSelector(state => state.movies);
    const reduxState = useSelector(state => console.log(state));

    const moreImages = () => {
        dispatch(goToNextPage());
    }

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch, currentPage]);

    return (
        <PageWrapper>
            <Container>
                <Grid container justifyContent="space-between">
                    <Typography variant="h5">All Movies</Typography>
                </Grid>

                {
                    movies ? (
                            <InfiniteScroll
                                dataLength={movies.length}
                                next={moreImages}
                                hasMore={currentPage < totalPages}
                                loader={<Typography variant="h5" align="center">Loading...</Typography>}
                                endMessage={<Typography variant="h5" align="center">Yay! You have seen it all.</Typography>}
                            >
                                <Grid style={{marginTop: 18}} container spacing={0}>
                                    {
                                        movies.map((movie, index) => (
                                            <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                                                <MovieLinkItem movie={movie} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </InfiniteScroll>
                    ) : (
                        <Typography variant="h5" align="center">No Movies.</Typography>
                    )
                }
            </Container>
        </PageWrapper>
    )
}

export default MoviesPage
