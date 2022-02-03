import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BasicJavaScript = () => {
    // primitive
    const nama = 'yoga Prianjaya';
    let usia = 22;
    const isMan = true;

    // complex
    const hewan = {
        nama: 'miaw',
        usia: 2,
        local: true,
        keturunan: {
            jantan: 'king',
            betina: 'Queen'
        }
    }

    // fungsi
    const sapaOrang = (nama, usia) => {
        console.log(`Hallo ${nama}, usia anda ${usia}`);
    };
    sapaOrang('Yoga', 22);

    // array
    const namaOranga = ['yoga', 'prianjaya'];

    const sapaHewan = object => {
        // let hallo;
        // if(object.nama == 'miaw') {
        //     hallo = 'Hallo Miaw';
        // }
        // else {
        //     hallo = 'Ini siapa?';
        // }
        // return hallo;
        return object.nama === 'miaw' ? 'Hallo Miaw' : 'Ini siapa?';
    }

    return (
        <View style={style.wrapper}>
            <Text style={style.textTitel}>Basic Java Script</Text>
            <Text>Nama : {nama}</Text>
            <Text>{sapaHewan(hewan)}</Text>
            {namaOranga.map((orang) => (
                <Text>{orang}</Text>
            ))}
        </View>
    )
};

export default BasicJavaScript;

const style = StyleSheet.create({
    wrapper: {padding: 20},
    textTitel: {textAlign: 'center'}
})