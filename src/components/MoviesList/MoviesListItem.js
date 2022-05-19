import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    } from 'react-native';

class MoviesListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const item = this.props.item.item;
        return(
            <View style={styles.itemContainer}>
                <Text>{item.original_title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 50,
    }
})

export default MoviesListItem;
 