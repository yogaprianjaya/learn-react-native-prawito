import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Illustrations from '../../assets/images/illustrations.svg'

const ReactNativeSVG = () => {
    return (
        <View style={{borderColor: 'black', borderWidth: 1, margin: 20, padding: 20, borderRadius: 10}}>
            <Text style={style.textTitle}>Menampilkan SVG</Text>
            <Illustrations width={244} height={125} />
        </View>
    );
};

export default ReactNativeSVG;

const style = StyleSheet.create({
    textTitle: {textAlign: 'center'}
});