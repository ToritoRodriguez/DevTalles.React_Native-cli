import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkScreen = () => {
    return (
        <View style={[styles.container]}>

            <View style={[styles.box, styles.purpleBox]}/>
            <View style={[styles.box, styles.orangeBox]}/>
            <View style={[styles.box, styles.blueBox]}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // justifyContent: 'space-between',
        justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
    },
    box:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox:{
        backgroundColor: '#5856D6',  
        // alignSelf: 'flex-end',  
        // flex: 2,
    },
    orangeBox:{
        backgroundColor: '#F0A23B',  
        // flex: 1,
        // flex: 2,
    },
    blueBox:{
        backgroundColor: '#28C4D9', 
        // width: '100%',
        // alignSelf: 'center',
        // alignSelf: 'flex-start',
        // flex: 4,
    },
})