import React from 'react';
import Home from './views/Home/Home';
import MoviesList from './views/MoviesList/MoviesList';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    } from 'react-native';

class App extends React.Component {

    render() {
        return(
            <SafeAreaView>
                <MoviesList />
            </SafeAreaView>
        )
    }
}

export default App;
 