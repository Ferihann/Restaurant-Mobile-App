import React from 'react';
import { View , Text,Image,Linking,TouchableOpacity } from 'react-native';

export default class info extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        var { navigate }= this.props.navigation;

        return (
            <View style={{flex: 1,backgroundColor:'#ffffff'}}>


                <View style={styles.subContainerStyle}>
                    <TouchableOpacity onPress={() => navigate('Home',{})} >
                        <Image style={styles.iconStyle} source={require('./Icon/indir.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:28,color:'#000000',marginLeft:60,marginTop: 20}}>HAKKINDA</Text>

                </View>

                <Image style={styles.iconStyle2}
                       source={require('./Icon/1500x1500logo.png')}/>

                <Text style={[styles.textStyle2,{marginLeft:20,marginTop:40}]}>MT TEKNOLOJİ BİLGİSAYAR SİSTEMLERİ
                     </Text>
                <Text style={[styles.textStyle2,{marginLeft:55}]} >ITH. IHR. SAN. VE TIC. LTD. ŞTİ.</Text>
                <Text  style={[styles.textStyle2,{marginLeft:90}]}> +90 (380) 523 32 36</Text>
                <Text style={[styles.textStyle2,{marginLeft:95,marginTop: 10,color:'#2fb5db',fontSize:22}]}
                      onPress={() => Linking.openURL('http://www.mt-teknoloji.com//')}>
                    www.mt-teknoloji.com
                </Text>

            </View>
        );

    }

}

const styles ={

    iconStyle : {
        margin:10,
        borderRadius:5,
        alignSelf: 'stretch',
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    iconStyle2 : {
            marginTop: 120,
            marginLeft:30,
            alignSelf: 'stretch',
            height: 120,
            width: 350,
            alignItems: 'center',
            justifyContent: 'flex-end',


        },

    textStyle: {
        marginTop: 15,
        color: '#6a6a6a',
        fontSize: 25 ,
        marginLeft:70,

    },
    textStyle2: {
        color: '#0a0407',
        fontSize: 20 ,
    },
    subContainerStyle: {
        flexDirection:'row',
        backgroundColor:'#2fb5db',
    }

};



