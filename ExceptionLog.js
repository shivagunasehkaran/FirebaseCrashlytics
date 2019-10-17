import React from 'react';
import {Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class ExceptionLog extends React.Component {

    handleOnPress = () => {
        firebase.crashlytics().log('Exception Log..');
    };

    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="ExceptionLog"
                color="#FF0000"
            />
        );
    }
}
