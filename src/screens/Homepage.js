import React from 'react';
import { ScrollView, StyleSheet, Text, View, Header } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Banner from '../components/Banner';
import HeaderBar from '../components/Header';
import TopBar from '../components/TopBar';
import Product from '../components/Product';
import data from '../data.json';
import Filters from '../components/Filters';


class Homepage extends React.Component {

    render () {
      return (
        
        <SafeAreaView   style={{flex:1, backgroundColor: '#ffffff'}}>
          <HeaderBar/>
          <ScrollView>
          <View>
             <TopBar image={data[0].banner}/>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data[0].header.map((item, index) => (
                  <Banner image={item.image} key={index}/>
                ))}
              </ScrollView>

              <Filters />

              <View style={styles.container}>
              {data[0].body.map((item, index) => (
                  <Product image={item.image} key={index} title={item.productname}/>
                ))}
              </View>
              
          </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
}

export default Homepage;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
});
