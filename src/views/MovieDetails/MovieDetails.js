import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    } from 'react-native';

function MovieDetails({route, navigation}) {

    const {movie} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <Text>{movie.item.original_title}</Text>
            <Text>{movie.item.overview}</Text>
            <Text>{movie.item.release_date}</Text>
            <Text>{movie.item.vote_average}/10 ({movie.item.vote_count})</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-around",
        flex: 1,
        alignItems: "center"
    },
})

export default MovieDetails;
 