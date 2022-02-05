import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Story = props => {
    return (
        <View style={{marginHorizontal: 5, alignItems: "center"}}>
            <Image source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLRexzNqKp2lRPNUmvq0_xOUu8oxf-z5LjSxi2lOPlc=s88-c-k-c0x00ffffff-no-rj'}} style={{width: 80, height: 80, borderRadius: 40}} />
            <Text>{props.judul}</Text>
        </View>
    )
};

const PropsDinamis = () => {
    return (
        <View style={{borderColor: 'black', borderWidth: 1, margin: 20, padding: 20, borderRadius: 10}}>
            <Text>Props Dinamis</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                    <Story judul="Youtube" />
                    <Story judul="Instagram" />
                    <Story judul="Facebook" />
                    <Story judul="Twitter" />
                    <Story judul="LinkIn" />
                </View>
            </ScrollView>
        </View>
    )
};

export default PropsDinamis;