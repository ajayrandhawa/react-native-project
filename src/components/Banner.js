import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Banner = props => (
        <View style={styles.imgcontainer}>
            <Image style={styles.image} source={{uri:props.image}} />
        </View> 
)


export default Banner;

const styles = StyleSheet.create({

    imgcontainer : {
        flex: 1,
        width: '100%',
        height: 150,
        paddingLeft: 10,
    },
    image : {
        flex: 1,
        aspectRatio: 1, 
        resizeMode: 'contain',
        borderRadius: 5,
        borderColor: '#f0f0f0',
        borderWidth: 1
    }


  });