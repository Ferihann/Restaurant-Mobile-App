import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';

export default class Mybutton extends React.Component {
    render () {
        return (
            <View>
                <TouchableOpacity>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}