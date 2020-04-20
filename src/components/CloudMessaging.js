import React ,{useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {screenWidth} from '../constants';

const CloudMessaging = (props) => {

    useEffect(() => {
        registerAppWithFCM()
    },[]);

    async function registerAppWithFCM() {
        await messaging().registerDeviceForRemoteMessages();
    }

    return (
        <View style={cloudMessagingStyles.wrap}>
            <Text style={{...cloudMessagingStyles.item,...cloudMessagingStyles.text}}>FB cloud messaging</Text>

            <Switch
                style={cloudMessagingStyles.item}
                trackColor={{ false: "#767577", true: "#6E91FF" }}
                thumbColor={"#5970ff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {}}
                value={true}
            />
        </View>
    )
};

export {CloudMessaging}

const cloudMessagingStyles = StyleSheet.create({
    wrap:{
        width: screenWidth,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    text:{
        fontSize: 16,
        color: '#6E91FF'
    },
    item:{
        flex: 1,
    }
});
