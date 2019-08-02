import React from 'react';
import {ScrollView, View, Image, StyleSheet, Text, TouchableOpacity, Picker} from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import Button from 'react-native-button';



export default class Masa extends React.Component {

    componentWillMount() {
       axios.get('http://10.104.97.178:3168/api/masa/findall').then(response => this.setState({ data : response.data }));
    }


    componentDidMount() {
     /*   const params = {
            'longitude': -6.3922782,
            'latitude': 106.8268856
        };
        axios.post('http://10.107.6.108:3168/api/masa/findall', { params }).then(res => {
            console.warn(res);
        })
        */
    }
    constructor(props) {

        super(props);
        this.state = {
            pickerValue: 'hepsi',
            data: [],
        }

    }

    static navigationOptions = {
        header: null
    };


    Item(item) {
        var {navigate} = this.props.navigation;

        if (item.id < 26) {
            if (item.durumu === 1 && (this.state.pickerValue === 'hepsi' || this.state.pickerValue === 'dolu')) {
                return (

                    <View style={styles.containerStyle}>
                        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#f8313a'}]}
                                          onPress={() => navigate('Masa_In', {tableTitle:item.masa_adi })}>
                            <Text style={styles.textStyle}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            else if (item.durumu === 0 && (this.state.pickerValue === 'hepsi' || this.state.pickerValue === 'bos')) {

                return (<View style={styles.containerStyle}>
                        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#769df8'}]}
                                          onPress={() => navigate('Masa_In', {tableTitle:'Masa ' + item.id })}>
                            <Text style={styles.textStyle}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            else if (item.durumu === 2 && (this.state.pickerValue === 'hepsi' || this.state.pickerValue === 'kalkmak-üzere')) {

                return (<View style={styles.containerStyle}>
                        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#f8c86c'}]}
                                          onPress={() => navigate('Masa_In', {tableTitle:'Masa ' + item.id })}>
                            <Text style={styles.textStyle}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }

        }
        else{

        }
    }

    Item2(item) {

        var {navigate} = this.props.navigation;
        if (item.id >25) {
            if (item.durumu === 1 && (this.state.pickerValue === 'hepsi' || this.state.pickerValue === 'dolu')) {

                return (

                    <View style={styles.containerStyle}>
                        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#f8313a'}]}
                                          onPress={() => navigate('Masa_In', {tableTitle:'Masa ' + item.id })}>
                            <Text style={styles.textStyle}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            else if (item.durumu === 0 && (this.state.pickerValue === 'hepsi' || this.state.pickerValue === 'bos')) {

                return (<View style={styles.containerStyle}>
                        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#769df8'}]}
                                          onPress={() => navigate('Masa_In',{tableTitle:'Masa ' + item.id })}>
                            <Text style={styles.textStyle}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            else if (item.durumu === 2 && (this.state.pickerValue === 'hepsi' || this.state.pickerValue === 'kalkmak-üzere')) {

                return (<View style={styles.containerStyle}>
                        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#f8c86c'}]}
                                          onPress={() => navigate('Masa_In', {tableTitle:'Masa ' + item.id })}>
                            <Text style={styles.textStyle}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }

        }
    }

    renderItem() {
        return (
            this.state.data.map(responseData => <View>
                {this.Item(responseData)}</View>));
    }
    renderItem2(){
        return(  this.state.data.map(responseData => <View>
            {this.Item2(responseData)}</View>)
       );
    }

    render() {
        var {navigate} = this.props.navigation;

        return (
            <View style={styles.ContainerStyle1}>
                <View style={styles.subContainerStyle}>
                    <Button onPress={() => this.forceUpdateHandler}>
                        <Image style={styles.iconStyle} source={require('./Icon/repeat.png')}/>
                    </Button>
                    <Text style={styles.headerTextStyle}>RESTAURANT APP</Text>
                    <Button onPress={() => navigate('Profile', {})}>
                        <Image style={styles.iconStyle} source={require('./Icon/images.png')}/>
                    </Button>

                </View>
                <View>
                    <Picker selectedValue={this.state.pickerValue}
                            onValueChange={(itemValue) => this.setState(
                                {pickerValue: itemValue})}
                            style={styles.buttonStyle2}
                    >
                        <Picker.Item label='Hepsi' value='hepsi'/>
                        <Picker.Item label='Dolu Masalar' value='dolu'/>
                        <Picker.Item label='Boş Masalar' value='bos'/>
                        <Picker.Item label='Kalkmak Üzere Olan Masalar' value='kalkmak-üzere'/>
                    </Picker>

                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Button>
                        <Image style={styles.iconStyle} source={require('./Icon/800px_COLOURBOX5629566.jpg')}/>
                    </Button>
                    <Button>
                        <Image style={styles.iconStyle}
                               source={require('./Icon/500_F_13946910_SFoiMusYwsILZOsNm1EEZ5nyeTz6XV0q.jpg')}/>
                    </Button>

                </View>
                <ScrollView>
                <View style={{flexDirection:'row'}}>
                            <ScrollView style={{flex:1}}>
                                {
                                this.renderItem()
                                }
                            </ScrollView>
                            <ScrollView style={{flex:1}}>
                                    {
                                        this.renderItem2()
                                    }
                            </ScrollView>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 90,
        borderRadius: 5,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle2: {
        backgroundColor: '#c3f8d2',
        height: 50,
        borderRadius: 5,
        margin: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f8f8f8'
    },
    containerStyle: {
        width: 200,
        height: 100,
        flex: 1

    },
    iconStyle: {
        alignSelf: 'stretch',
        borderRadius:3,
        margin: 5,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#f8f8f8'
    },
    ContainerStyle1: {
        flex: 1,
        backgroundColor: '#f6f8ed',
    },
    subContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#4d89f8',
    },
    headerTextStyle: {
        color: '#f8f8f8',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 40
    }


});