import React from 'react';
import {API_URL, API_CONFIG} from "@env";
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    } from 'react-native';
import MoviesListItem from './MoviesListItem';

class MoviesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1
        }
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = async () => {
        return fetch(API_URL + '/movie/popular' + API_CONFIG + '&page=' + this.state.currentPage.toString())
            .then((response) => response.json())
            .then((json) => {
                let currentMovies = this.state.movies;
                for(let movie of json.results) {
                    currentMovies.push(movie);
                }
                this.setState({movies: currentMovies ? currentMovies : []});
                this.setState({currentPage: json.page ? (json.page + 1) : 1});
            })
            .catch((error) => {
                console.error(error);
        });
    }

    render() {
        const {onOpenMovieDetail} = this.props;
        return(
            <SafeAreaView style={styles.listContainer}>
                <FlatList
                    data={this.state.movies}
                    renderItem={(item, index) => <MoviesListItem key={index} item={item} onOpenMovieDetail={() => onOpenMovieDetail(item)}/>}
                    keyExtractor={movie => movie.id}
                    onEndReached={this.loadMovies}
                 />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    }
})

export default MoviesList;
 