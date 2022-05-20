import React from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';

function Movies ({ navigation }) {

    const onOpenMovieDetail = (movie) => {
        navigation.navigate('MovieDetails', {
            movie: movie,
          });
    }

    return(
        <MoviesList onOpenMovieDetail={onOpenMovieDetail}/>
    )
}

export default Movies;
 