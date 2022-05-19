import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    } from 'react-native';

class Home extends React.Component {

    render() {
      return(
        <View>
            <Text>Bonjour test</Text>
            <Image
            style={styles.logo}
            source={require('../../assets/logo/logo_ca.png')}
            />
            <View style={[styles.buttonView, { backgroundColor: 'blue', borderColor: 'black' }]}>
                <TouchableOpacity
                style={styles.button}>
                <Text style={{ color: 'white', fontSize: 20 }}> Bienvenue </Text>
                </TouchableOpacity>
            </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    buttonView: {
      flexDirection:'row',
      borderWidth: 1,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      fontSize: 20,
      marginVertical: 10,
      paddingHorizontal: 20,
      width: '75%',
      alignSelf: 'center',
    },
    button: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      paddingVertical: 15,
    },
    logo: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginTop: '25%',
      marginBottom: '15%',
    },
  });

export default Home;
 