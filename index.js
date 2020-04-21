import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

//  read more here https://rnfirebase.io/messaging/usage#background-application-state
function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <App />;
}

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('handled in the background when app close and kill...', remoteMessage);
});

AppRegistry.registerComponent(appName, () => HeadlessCheck);
