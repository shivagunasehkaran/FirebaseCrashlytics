/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Button,
} from 'react-native';
import firebase from 'react-native-firebase';


export default class App extends React.Component {

    handleOnPress = () => {
        firebase.crashlytics().log('Test crash');
        firebase.crashlytics().recordError(37, 'Test Error');
        firebase.crashlytics().crash();
    };

    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="Crash"
            />
        );
    }
}
