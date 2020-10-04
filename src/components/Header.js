import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HeaderBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.avatar}>
            <Image style={styles.image} source={require("../../assets/user.png")} />
        </View>
        <TextInput style={styles.input} placeholder='Search..' ></TextInput>
        <TouchableOpacity style={styles.taskListButton}>
            <Ionicons name="ios-chatbubbles" size={30} color={'#ffffff'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskListButton}>
            <Ionicons name="md-cart" size={30} color={'#ffffff'}/>
        </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({

    container : {  
      width: '100%',
      padding: 10,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: '#fe6061'
    },

    avatar : {
        marginTop: 4,
        width: 40,
        height: 40,
    },
    image : {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    input:{
        flex: 1,
        fontSize: 16,
        padding: 10,
        borderRadius: 4,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f6f7f9'
    },
    taskListButton : {
        marginRight: 5
    }

  });