import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import headphone from '../../assets/images/headphone.jpg';

const StylingComponent = () => {
  return (
    <View style={{borderColor: 'black', borderWidth: 1, margin: 20, padding: 20, borderRadius: 10}}>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{width: 100, height: 100, backgroundColor: 'green', borderWidth: 2, borderColor: 'blue', marginTop: 20, marginLeft: 20}} />
      <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
        <Image source={headphone} style={{width: 188, height: 107, borderRadius: 8}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Macbook Pro 2019</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop: 12}}>Rp. 25.000.000</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
        <View style={{backgroundColor: '#6fcf97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>Beli</Text>
        </View>
      </View>
    </View>
  )
}
  
const styles = StyleSheet.create ({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40
  }
});

export default StylingComponent;