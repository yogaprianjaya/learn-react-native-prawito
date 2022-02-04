import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const CallAPIVanila = () => {
    useEffect(() => {
        // Sample Method GET
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => console.log(json))

        // Sample Method POST
        const dataAPI = {
            name: "morpheus",
            job: "leader"
        };
        console.log('data object: ', dataAPI);
        console.log('data stringify: ', JSON.stringify(dataAPI));
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataAPI)
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);
    return (
        <View style={style.wrapper}>
            <Text style={style.textTitle}>Get API Vanila JS</Text>
        </View>
    );
};

export default CallAPIVanila;

const style = StyleSheet.create({
    wrapper: {padding: 20},
    textTitle: {textAlign: 'center'}
})