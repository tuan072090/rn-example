import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Analytics} from '../../components/Analytics';
import {CloudMessaging} from '../../components/CloudMessaging';

const HomeScreen = () => {
    
    return(
        <View style={homeStyles.wrap}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={homeStyles.scrollView}>

                <Analytics/>

                <CloudMessaging/>



            </ScrollView>
        </View>
    )
};

export {HomeScreen}

const homeStyles = StyleSheet.create({
    wrap:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
