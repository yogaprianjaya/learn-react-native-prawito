import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import headphone from '../../assets/images/headphone.jpg';

const Product = (props) => {
    return (
        <View style={style.wrapper}>
            <Image source={headphone} style={style.image} />
            <Text style={style.title}>New Macbook Pro 2019</Text>
            <Text style={style.price}>Rp. 25.000.000</Text>
            <Text style={style.place}>Jakarta Barat</Text>
            <TouchableOpacity onPress={props.buttonPress}>
                <View style={style.button}>
                    <Text style={style.textButton}>Beli</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Product;

const style = StyleSheet.create({
    wrapper: {padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8},
    image: {width: 188, height: 107, borderRadius: 8},
    title: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
    price: {fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop: 12},
    place: {fontSize: 12, fontWeight: '300', marginTop: 12},
    button: {backgroundColor: '#6fcf97', paddingVertical: 6, borderRadius: 25, marginTop: 20},
    textButton: {fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}
});