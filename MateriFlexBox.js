import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class MateriFlexBox extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', backgroundColor: 'gray', alignItems: 'center'}}>
                    <View style={{backgroundColor: 'red', flex: 1, height: 50}} />
                    <View style={{backgroundColor: 'blue', flex: 2, height: 100}} />
                    <View style={{backgroundColor: 'yellow', flex: 3, height: 150}} />
                    <View style={{backgroundColor: 'green', flex: 4, height: 200}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                    <Text>Beranda</Text>
                    <Text>Youtube</Text>
                    <Text>About</Text>
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLRexzNqKp2lRPNUmvq0_xOUu8oxf-z5LjSxi2lOPlc=s88-c-k-c0x00ffffff-no-rj'}} style={{width: 100, height: 100, borderRadius: 50}} />
                    <View style={{marginLeft: 14}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Prawito Hudoro</Text>
                        <Text>100K Subscriber</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MateriFlexBox;