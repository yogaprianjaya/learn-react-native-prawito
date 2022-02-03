import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Illustrations from '../../assets/images/illustrations.svg'

const ReactNativeSVG = () => {
    return (
        <View style={style.wrapper}>
            <Text style={style.textTitle}>Menampilkan SVG</Text>
            <Illustrations width={244} height={125} />
        </View>
    );
};

export default ReactNativeSVG;

const style = StyleSheet.create({
    wrapper: {padding: 20},
    textTitle: {textAlign: 'center'}
});