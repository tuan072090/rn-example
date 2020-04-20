
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('handled in the background when app close and not kill...', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
