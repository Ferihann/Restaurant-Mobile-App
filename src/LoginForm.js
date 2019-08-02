import React, {Component} from 'react';
import Button from 'react-native-button';
import {View, TextInput, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            correctPassword: false,
        };

    }


    static navigationOptions = {
        header: null
    };

    clickLogin() {
        var {navigate} = this.props.navigation;
        if (this.state.password === '1234') {
            this.setState({correctPassword: true})
            navigate('Main', {})
        }
        else if (this.state.password === '') {
            Alert.alert(
                'Mesaj',
                'Bu alan boş bırakılamaz!',
                [
                    {text: 'Tamam', onPress: () => null}
                ]
            )
        }
        else {
            Alert.alert(
                'Mesaj',
                'Lütfen geçerli bir şifre giriniz!',
                [
                    {text: 'Tamam', onPress: () => null}
                ]
            )
        }
    }


    render() {

        var {navigate} = this.props.navigation;

        return (
            <ScrollView style={{flex: 0.42, backgroundColor: '#f8f1e7'}}>

                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => navigate('Info', {})}>
                        <Image style={styles.iconStyle2}
                               source={require('./Icon/073497-purple-white-pearl-icon-alphanumeric-information2-ps.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textStyle3}>RESTAURANT APP</Text>
                    <TouchableOpacity onPress={() => navigate('Profile', {})}>
                        <Image style={styles.iconStyle}
                               source={require('./Icon/Adjustor_settings-_equalizer-_equalizer_settings-_parameters-setting-sound-512.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainerStyle}>
                    <TextInput style={{fontSize: 18}}
                               secureTextEntry
                               placeholder="Şifrenizi girin"
                               onChangeText={(password) => this.setState({password})}

                    />
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.clickLogin.bind(this)}
                    >
                        <Text style={styles.textStyle}>Giriş</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    subContainerStyle: {
        marginTop: 80,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#faffff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#95808a',
        position: 'relative',
        borderRadius: 10

    },
    textStyle: {
        color: '#faffff',
        fontSize: 30,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textStyle2: {
        color: '#e9c3f8',
        fontSize: 30,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textStyle3: {
        flex: 4,
        fontSize: 25,
        fontWeight: '600',
        color: '#faffff',
        marginLeft: 10
    },
    buttonStyle: {
        flex: 1.5,
        height: 70,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a221ff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a221ff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    buttonStyle2: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffbe72',
        marginLeft: 280,
        marginRight: 0,
    },
    iconStyle: {
        alignSelf: 'stretch',
        marginRight: 5,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    iconStyle2: {
        alignSelf: 'stretch',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: -10
    },
    viewStyle: {
        flexDirection: 'row',
        flex: 3,
        backgroundColor: '#ffbe72',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {witdth: 0, height: 2},
        shadowOpacity: 1.0,

    },
};
