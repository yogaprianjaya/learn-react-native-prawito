import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../../components/Cart";
import Product from "../../components/Product";

const Communication = () => {
    const [total, setTotal] = useState(0);
    return (
        <View style={style.wrapper}>
            <Text style={style.textTitle}>Komunikasi antar komponen</Text>
            <Cart total={total} />
            <Product buttonPress={() => setTotal(total + 1)}/>
        </View>
    )
}

export default Communication;

const style = StyleSheet.create({
    wrapper: {padding: 20},
    textTitle: {textAlign: 'center'}
})