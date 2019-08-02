import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            page : 'first'
        }
    }

    render() {

        return(

                <Tab
                    onSelect={(page)=>this.setState({page})} >
                    <Text name='first'>First</Text>
                    <Text name="second" >Second</Text>
                    <Text name="third">Third</Text>
                    <Text name="fourth">Fourth</Text>
                    <Text name="fifth">Fifth</Text>
                </Tab>



        );
    }
}
