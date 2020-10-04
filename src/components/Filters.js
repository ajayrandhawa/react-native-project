import React , {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Picker, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Filters = (props) => {
  const [selectedValue, setSelectedValue] = useState("FA");
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Products</Text>
        <Picker style={{ height: 50, width: 150 }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} selectedValue={selectedValue}>
        <Picker.Item label="Featured" value="FA" />
        <Picker.Item label="Price: Low to High" value="LTH" />
        <Picker.Item label="Price: High to Low" value="HTL" />
        <Picker.Item label="Newest Arrivals" value="NA" />
      </Picker>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({

    container : {  
      width: '100%',
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },

    label:{
      fontSize: 15,
      fontWeight: 'bold'
    }
  });
