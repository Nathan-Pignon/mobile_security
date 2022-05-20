import React from 'react';
import {API_URL, API_CONFIG} from "@env";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    FlatList,
    View,
    } from 'react-native';

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: {},
        }
    }

    componentDidMount() {
        this.loadMovie();
    }

    loadMovie = async () => {
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
        return(
            <SafeAreaView style={styles.listContainer}>
                <Text>Yes</Text>
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

export default MovieDetails;
 