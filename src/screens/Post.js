import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/product-default.jpg')}/>
          </View>
          <Text>Summary</Text>
          <TextInput style={styles.summary} multiline={true} numberOfLines={6} placeholder='Tell about what you are posting' ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Post2")}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View>
          
        </View>
      </View>
    );
  }
   
}

export default Post;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    padding:30
  },
  Text : {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageContainer : {
    alignItems: 'center'
  },
  image : {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 5,
    aspectRatio: 1
  },
  summary : {
    width: '100%',
    borderWidth: 1,
    borderColor: '#909090',
    fontSize: 14,
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
    textAlignVertical: "top"
  },
  button : {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fe6061',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText : {
    color: '#ffffff'
  }
});
