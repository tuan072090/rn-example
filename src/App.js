import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens();

import React, {useState, useEffect} from 'react';

import messaging from '@react-native-firebase/messaging';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './screens/home';
import {SettingsScreen} from './screens/settings';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    const [initialRoute, setInitialRoute] = useState('Home');

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.warn("message when app opening...", remoteMessage)
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.warn(
                'app open from background state........:', remoteMessage,
            );
        });

        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.warn(
                        'Notification caused app to open from quit state:',
                        remoteMessage,
                    );
                }
            });


        return unsubscribe;
    }, []);


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
