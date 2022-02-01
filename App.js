import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return(
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
      <Text>Hello !</Text>
      <Name />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Name = () => {
  return <Text>Yoga Prianjaya</Text>
};

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
}

export default App;