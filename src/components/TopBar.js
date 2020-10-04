import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';


const TopBar = (props) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:props.image}} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({

    container : {  
      width: '100%',
      padding:10,
      flexDirection: 'row',
      alignItems:'center'
    },
    image : {
        width: '100%',
        height: 150,
        aspectRatio: 1.6, 
        resizeMode: 'contain',
        borderColor : '#f0f0f0',
        borderWidth: 1
    }

  });