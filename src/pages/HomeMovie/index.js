import React, {useEffect, useState} from 'react';
import { popularMovies, topRatedMovies } from '../../api/movies';
import HomeMovieHero from '../../components/HomeMovieHero';
import MovieCategory from '../../components/MovieCategory';

const HomeMovie = () => {
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);

    const getTopRatedMovies = async () => {
        try {
            const { data } = await topRatedMovies();
            setTopRated(data.results);
        } catch (error) {
            console.log(error)
        }
    };

    const getPopularMovies = async () => {
        try {
            const { data } = await popularMovies();
            setPopular(data.results);
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getTopRatedMovies();
        getPopularMovies();
    }, [])

    return (
        <div>
            <HomeMovieHero />
            <MovieCategory title="Popular" movies={popular} />
            <MovieCategory title="Top Rated" movies={topRated} />
        </div>
    )
}

export default HomeMovie
