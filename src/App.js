import React, { useEffect, useState } from 'react';
import {View, ScrollView} from 'react-native';
import BasicJavaScript from './pages/BasicJavaScript';
import Communication from './pages/Communication';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false)
  //   }, 6000)
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        <BasicJavaScript />
      </ScrollView>
    </View>
  );
};

export default App;
