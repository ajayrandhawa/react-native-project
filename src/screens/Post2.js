import React, { Component} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Picker } from 'react-native';

class Post2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.option}>
          <Text>Category</Text>
          <Picker style={{ height: 50, width: '100%' }}>
            <Picker.Item label="Featured" value="FA" />
            <Picker.Item label="Price: Low to High" value="LTH" />
            <Picker.Item label="Price: High to Low" value="HTL" />
            <Picker.Item label="Newest Arrivals" value="NA" />
          </Picker>
        </View>
        <View style={styles.option}>
          <Text>Condition</Text>
          <Picker style={{ height: 50, width: '100%'}}>
            <Picker.Item label="New" value="New" />
            <Picker.Item label="Used" value="Used" />
            <Picker.Item label="Open Box" value="Open" />
            <Picker.Item label="Certified" value="Certified" />
          </Picker>
        </View>

        <View>
          <Text>Description</Text>
          <TextInput style={styles.summary} multiline={true} numberOfLines={6} placeholder='Tell more about the product' ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Post3")}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
   
}

export default Post2;

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
