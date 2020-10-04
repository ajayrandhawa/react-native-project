import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Product = (props) => {

  var [ isPress, setIsPress ] = React.useState(false);

  var touchProps = {                    
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),               
  };

  return (
    <View style={styles.product}>
      <Image style={styles.productImage} source={{uri:props.image}}/>
      <Text style={styles.productLabel}>{props.title}</Text>
    </View>       
  );
};

export default Product;

const styles = StyleSheet.create({

  product : {
    width: '46%', 
    marginLeft: '2%', 
    marginRight: '2%', 
    marginTop: '2%',
    height : undefined,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10
  },
  productImage : {
    width: '100%',
    height: 150,
    marginTop: 5,
    resizeMode: 'contain',
  },
  productLabel : {
    paddingLeft : 10,
    paddingBottom : 10,
    marginTop: 10
  }

  });