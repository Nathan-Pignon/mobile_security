import React from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';

function Movies ({ navigation }) {

    const onOpenMovieDetail = (movie) => {
        console.log("movie", movie.item.id)
    }

    return(
        <MoviesList onOpenMovieDetail={onOpenMovieDetail}/>
    )
}

export default Movies;
 