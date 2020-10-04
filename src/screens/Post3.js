import React, { Component} from 'react';
import { View, Text, CheckBox, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class Post3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Price</Text>
          <TextInput style={styles.summary} placeholder='eg. $10' ></TextInput>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} />
          <Text style={styles.label}>Do you like React Native?</Text>
        </View>


        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Post4")}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
   
}

export default Post3;

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
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  }
});
