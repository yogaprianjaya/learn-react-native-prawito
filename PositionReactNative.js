import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import headphone from './headphone.jpg'

const PositionReactNative = () => {
    return (
        <View style={style.wrapper}>
            <Text style={{marginBottom: 10}}>Materi Position</Text>
            <View style={style.cardWrapper}>
                <Image source={headphone} style={style.image} />
                <Text style={style.notif}>10</Text>
            </View>
            <Text style={style.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

export default PositionReactNative;

const style = StyleSheet.create({
    image: {width: 50, height: 50, borderRadius: 25},
    cardWrapper: {borderWidth: 1, borderColor: 'black', width: 93, height: 93, borderRadius: 93 / 2, justifyContent: 'center', alignItems: 'center', position: 'relative'},
    wrapper: {padding: 20, alignItems: 'center'},
    text: {fontSize: 12, color: '#777', fontWeight: '700', marginTop: 8},
    notif: {fontSize: 12, color: 'white', backgroundColor: 'lightgreen', padding: 5, borderRadius: 25, width: 24, height: 24, position: 'absolute', top: 0, right: 0}
});