import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import headphone from '../../assets/images/headphone.jpg';

const Cart = (props) => {
    return (
        <View>
            <View style={style.cardWrapper}>
                <Image source={headphone} style={style.image} />
                <Text style={style.notif}>{props.total}</Text>
            </View>
            <Text style={style.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

export default Cart;

const style = StyleSheet.create({
    image: {width: 50, height: 50, borderRadius: 25},
    cardWrapper: {borderWidth: 1, borderColor: 'black', width: 93, height: 93, borderRadius: 93 / 2, justifyContent: 'center', alignItems: 'center', position: 'relative'},
    wrapper: {padding: 20, alignItems: 'center'},
    text: {fontSize: 12, color: '#777', fontWeight: '700', marginTop: 8},
    notif: {fontSize: 12, color: 'white', textAlign: 'center', backgroundColor: 'lightgreen', padding: 5, borderRadius: 25, width: 24, height: 24, position: 'absolute', top: 0, right: 0}
});