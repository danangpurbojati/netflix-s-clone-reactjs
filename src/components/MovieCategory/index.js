import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MovieLinkItem from '../MovieLinkItem';
import { CustomContainer } from './styles';

const MovieCategory = ({title, movies}) => {
    return (
        <CustomContainer maxWidth="lg">
            <Grid align="center" container justifyContent="space-between">
                <Typography variant="h5">
                    {title}
                </Typography>
            </Grid>
            {
                movies ? (
                    <Grid style={{marginTop: 8}} container spacing={0}>
                        {
                            // eslint-disable-next-line array-callback-return
                            movies.map((movie, index) => {
                                if (index < 12 ) {
                                    return (
                                        <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
                                            <MovieLinkItem movie={movie} />
                                        </Grid>
                                    )
                                }
                            })
                        }
                    </Grid>
                ) : (
                    <p>tak ada movie</p>
                )
            }
        </CustomContainer>
    )
}

export default MovieCategory
