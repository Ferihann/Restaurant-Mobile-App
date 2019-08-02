import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView, CheckBox, TouchableOpacity, Image} from 'react-native';
import Button from 'react-native-button';

export default class ServerSettings extends Component {


    static navigationOptions = {
        header: null
    };

    Item(param) {
        return (
            <View style={styles.checkBoxStyle}>
                <CheckBox/>
                <Text style={{color: '#1d0d13', fontSize: 16, alignItems: 'center'}}>{param}</Text>
            </View>
        );
    }

    render() {
        var {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1,backgroundColor:'#ffffff'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>Ayarlar</Text>
                        <Button style={{borderRadius: 5}} onPress={() => navigate('Home', {})}>
                            <Image style={styles.iconStyle}
                                   source={require('./Icon/vector-illustration-of-blue-check-icon-on-white-background_167244473.jpg')}/>
                        </Button>
                    </View>

                </View>
                <ScrollView style={{flexDirection: 'column', flex: 20}}>
                    <View style={{flexDirection: 'column', flex: 8}}>
                        <View style={{backgroundColor: '#30cff3',height:30}}>
                            <Text style={{color: 'black',fontSize:17}}> Sunucu Ayarları</Text>
                        </View>


                        <View style={{flex: 8, marginTop: 5}}>
                            <Text style={{color: 'black',fontSize:17}}> Ip Adresi</Text>
                            <TextInput/>
                            <Text style={{color: 'black',fontSize:17}}> Port Numarası</Text>
                            <TextInput/>
                        </View>

                    </View>

                    <View style={{flex: 2}}>
                        <Text style={{backgroundColor: '#30cff3', color: 'black',fontSize:17,height:30,marginLeft:5}}>
                               Pda kullanım Ayarları</Text>
                        {this.Item('Yeni adisyon açarken sor.')}
                        {this.Item('Ürün eklendikten sonra açıklama penceresine geç.')}
                        {this.Item('Şifremi hatırla.')}
                        {this.Item('Ürün listesinde büyük fontlar kullan.')}
                        {this.Item('ürün listesini sürekli güncelle.')}
                        {this.Item('Açıklama eklemeden önce miktar sor.')}
                        {this.Item('Resim önbelleğini otomatik(her açışta) güncelle')}
                        {this.Item('Qrdroid Barkod okuyucu kullan.')}
                        <Text style={{backgroundColor: '#30cff3', color: 'black'}}> Tablet Ayarları</Text>
                        <Text>Tablet giriş ekranı için resim yükleyin.</Text>
                        {this.Item('default_back.png')}
                        <Text>Restaurantınızın logosunu yükleyin </Text>
                        {this.Item('default_logo.png')}
                        {this.Item('Yatay kullanımda ürün listesini otomatik gizle')}
                        {this.Item('Sadece menü olarak kullan.')}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'row',
        flex: 3
    },
    viewStyle: {
        flexDirection: 'row',
        flex: 5,
        backgroundColor: '#2fb5db',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {witdth: 0, height: 2},
        shadowOpacity: 1.0,

    },
    textStyle: {
        flex: 4,
        fontSize: 26,
        color: '#f8f8f8',
        marginLeft: 6
    },
    textInputStyle: {
        color: '#f8f9ff',
        fontSize: 30,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    style2: {
        backgroundColor: '#f59df8',
        flex: 2
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#7ed3f8',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b71ff',
        marginLeft: 5,
        marginRight: 30,
    },
    headerStyle: {
        flex: 2
    },
    checkBoxStyle: {
        height: 60,
        backgroundColor: '#e8e6f8',
        padding: 5,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        alignSelf: 'stretch',
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
        margin: 5

    }
});
