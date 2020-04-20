import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingsScreen = () => {
    return(
        <View style={settingsStyles.wrap}>
            <Text>Settings screen</Text>
        </View>
    )
};

export {SettingsScreen}

const settingsStyles = StyleSheet.create({
    wrap:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
