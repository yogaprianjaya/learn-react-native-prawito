import React, { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View style={{marginTop: 5}}>
            <Text style={{textAlign: 'center'}}>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number + 1)} />
        </View>
    )
};

class CounterClass extends Component {
    state = {
        number: 0
    }
    render() {
        return (
            <View style={{marginTop: 5}}>
                <Text style={{textAlign: 'center'}}>{this.state.number}</Text>
                <Button title="Tambah" onPress={() => this.setState({number: this.state.number + 1})} />
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={{borderColor: 'black', borderWidth: 1, margin: 20, padding: 20, borderRadius: 10}}>
            <Text style={style.textTitle}>State Dinamis</Text>
            <Text style={{textAlign: 'center', marginTop: 20}}>Function Component (Hooks)</Text>
            <Counter />
            <Counter />
            <Text style={{textAlign: 'center', marginTop: 20}}>Class Component</Text>
            <CounterClass />
            <CounterClass />
        </View>
    )
};

export default StateDinamis;

const style = StyleSheet.create({
    textTitle: {textAlign: 'center'},
})