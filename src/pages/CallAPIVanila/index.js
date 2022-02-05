import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CallAPIVanila = () => {
    // useEffect(() => {
    //     // Sample Method GET
    //     fetch('https://reqres.in/api/users/2')
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    //     // Sample Method POST
    //     const dataAPI = {
    //         name: "morpheus",
    //         job: "leader"
    //     };
    //     console.log('data object: ', dataAPI);
    //     console.log('data stringify: ', JSON.stringify(dataAPI));
    //     fetch('https://reqres.in/api/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(dataAPI)
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }, []);
    const [dataUser, setDataUser] = useState({
        first_name: '',
        email: ''
    });

    const getData = () => {
        console.log
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            setDataUser(json.data);
        })
    }

    return (
        <View style={{borderColor: 'black', borderWidth: 1, margin: 20, padding: 20, borderRadius: 10}}>
            <Text style={style.textTitle}>Get API Vanila JS</Text>
            <Button title="Get Data" onPress={getData} />
            <Text style={{textAlign: 'center', marginTop: 10}} >Respone Get Data</Text>
            <View style={style.line} />
            <Text>Nama : {dataUser.first_name}</Text>
            <Text>Email : {dataUser.email}</Text>
        </View>
    );
};

export default CallAPIVanila;

const style = StyleSheet.create({
    textTitle: {textAlign: 'center', marginBottom: 20},
    line: {height: 2, backgroundColor: 'black'}
})