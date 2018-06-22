import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class SttBar extends Component {
    render() {
        return (
            <StatusBar
                backgroundColor="#001970"
                barStyle="light-content"
                showHideTransition={'fade'}
            />
        );
    }
}


