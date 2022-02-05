import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../../components/Cart";
import Product from "../../components/Product";

const Communication = () => {
    const [total, setTotal] = useState(0);
    return (
        <View style={{borderColor: 'black', borderWidth: 1, margin: 20, padding: 20, borderRadius: 10}}>
            <Text style={style.textTitle}>Komunikasi antar komponen</Text>
            <Cart total={total} />
            <Product buttonPress={() => setTotal(total + 1)}/>
        </View>
    )
}

export default Communication;

const style = StyleSheet.create({
    textTitle: {textAlign: 'center'}
})