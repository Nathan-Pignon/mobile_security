import React from 'react';
import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Movies" component={Movies} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
 