/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import AndroidNativeCrash from './AndroidNativeCrash';
import ExceptionLog from './ExceptionLog';
import Caught from './Caught';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Caught />
                <ExceptionLog />
                <AndroidNativeCrash />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
