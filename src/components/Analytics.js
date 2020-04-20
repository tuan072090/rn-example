import React ,{useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import analytics from '@react-native-firebase/analytics';

import {screenWidth} from '../constants';

const Analytics = (props) => {

    useEffect(() => {
        analytics().logEvent('TestEVENT', {
            id: 123,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
        })
    },[]);

    return (
        <View style={analyticStyles.wrap}>
            <Text style={{...analyticStyles.item,...analyticStyles.text}}>Firebase analytic "TestEVENT"</Text>

            <Switch
                style={analyticStyles.item}
                trackColor={{ false: "#767577", true: "#6E91FF" }}
                thumbColor={"#5970ff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {}}
                value={true}
            />
        </View>
    )
};

export {Analytics}

const analyticStyles = StyleSheet.create({
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
