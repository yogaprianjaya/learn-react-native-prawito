import React, { useEffect, useState } from 'react';
import {View, ScrollView} from 'react-native';
import BasicJavaScript from './pages/BasicJavaScript';
import CallAPIVanila from './pages/CallAPIVanila';
import Communication from './pages/Communication';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNativeSVG from './pages/ReactNativeSVG';
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
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
        <PropsDinamis />
        <StateDinamis />
        <Communication />
        <BasicJavaScript />
        <ReactNativeSVG />
        <CallAPIVanila />
      </ScrollView>
    </View>
  );
};

export default App;
