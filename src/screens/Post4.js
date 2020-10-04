import React, { Component} from 'react';
import { View, Text, CheckBox, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class Post4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Selling From</Text>
          <TextInput style={styles.summary} placeholder='eg. 33 West, USA' ></TextInput>
        </View>

        <View>
          <Text>Weight</Text>
          <TextInput style={styles.summary} placeholder='eg. 45 Kg' ></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Post Item</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
   
}

export default Post4;

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
  summary : {
    width: '100%',
    borderWidth: 1,
    borderColor: '#909090',
    fontSize: 14,
    marginTop: 5,
    borderRadius: 5,
    padding: 5
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
