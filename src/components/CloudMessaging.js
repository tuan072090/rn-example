import React ,{useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {screenWidth} from '../constants';

const CloudMessaging = (props) => {

    useEffect(() => {
        registerAppWithFCM();

        // Listen to whether the token changes
        return messaging().onTokenRefresh(token => {
            console.log('new token', token);
        });
    },[]);

    async function registerAppWithFCM() {
        const authorizationStatus = await messaging().requestPermission();
        console.log("authorizationStatus.....", authorizationStatus)
        if (authorizationStatus) {
            console.log('Permission status:', authorizationStatus);
        }

        const deviceRemote = await messaging().registerDeviceForRemoteMessages();

        console.log("deviceRemote.......", deviceRemote);

        const token = await messaging().getToken();
        console.log("token.......", token);

    }

    return (
        <View style={cloudMessagingStyles.wrap}>
            <Text style={{...cloudMessagingStyles.item,...cloudMessagingStyles.text}}>FB cloud messaging</Text>

            <View style={cloudMessagingStyles.item}>
                <Switch
                    trackColor={{ false: "#767577", true: "#6E91FF" }}
                    thumbColor={"#5970ff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {}}
                    value={true}
                />
            </View>
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
