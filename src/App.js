import React from 'react';
import Home from './views/Home/Home';
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
                <Home />
            </SafeAreaView>
        )
    }
}

export default App;
 