import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { Text } from 'react-native-paper';

// import {Dimensions} from 'react-native';
// const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>

        <View style={styles.container}>
            
            <View style={{
                ...styles.purpleBox,
                width: width * 0.6,
            }}/>

        </View>


        <Text style={styles.title}>w:{width}, h:{height}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 300,
        height: 300,
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
    },
    purpleBox:{
        width: '50%',
        height: '50%',
        backgroundColor: '#5856D6',
    }
})