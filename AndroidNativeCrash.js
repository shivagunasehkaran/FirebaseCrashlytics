import React from 'react';
import {Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class AndroidNativeCrash extends React.Component {

    handleOnPress = () => {
        firebase.crashlytics().crash();
    };

    render() {
        return (
            <Button
                onPress={this.handleOnPress}
                title="AndroidNativeCrash"
                color="#000000"
            />
        );
    }
}
