import React from 'react';
import {Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class Caught extends React.Component {

    handleOnPress = () => {
        firebase.crashlytics().recordError(37, 'Caught Error');
    };

    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="Caught"
                color="#00FF00"
            />
        );
    }
}
