import React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    } from 'react-native';

class MoviesListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const item = this.props.item.item;
        const image = {uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + item.poster_path};
        return(
            <View style={styles.itemContainer}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>
                            {item.original_title.length > 30 ? item.original_title.substring(0,29) + '...' : item.original_title}
                        </Text>
                        <StarRating style={styles.starRating} rating={item.vote_average/2} color={'#ffffff'} onChange={(number) => console.log(number)} starSize={24} />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    infoContainer: {
        backgroundColor: "#00000080",
        height: "100%",
        width: "100%",
    },
    title: {
        flexDirection: "column",
        color: "white",
        fontSize: 25,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    starRating: {
        alignSelf: "center"
    },
})

export default MoviesListItem;
 