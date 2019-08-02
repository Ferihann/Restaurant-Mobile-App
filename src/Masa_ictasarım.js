
import React from 'react';
import { ScrollView, View, Image, StyleSheet,Text ,TouchableOpacity } from 'react-native';
import Button from 'react-native-button';


export default class Masa_ictasarım extends React.Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props)

        this.state ={
            tableTitle : this.props.navigation.state.params.tableTitle,
        };
    }
    Item(param) {
        return (
            <View style={{margin:6}}>
                <TouchableOpacity>
                <View style={styles.subContainerStyle2}>
                   <Text  style={{marginLeft:250}}>Miktar</Text>
                   <Text style={{marginLeft:50}}>Tutar</Text>
                </View>
                <View style={styles.subContainerStyle2}>
                    <Text style={{marginLeft:5}}>Ürün Adı</Text>
                    <Text  style={{marginLeft:210}}>1</Text>
                    <Text style={{marginLeft:80}}>5,00</Text>

                </View>
                </TouchableOpacity>
            </View>
        );
    }
    render () {
        var { navigate }= this.props.navigation
        console.warn(this.state.tableTitle);
        return (
            <View style={styles.ContainerStyle1}>

                <View style={styles.subContainerStyle}>
                   <Button onPress={() => navigate('Main',{})} >
                       <Image style={styles.iconStyle} source={require('./Icon/indir.png')}/>
                   </Button>
                    <Text style={[styles.textStyle,{flex:1}]}>{this.state.tableTitle}</Text>
                    <Button>
                        <Image style={styles.iconStyle} source={require('./Icon/illustration-of-refresh-icon_53876-5630.jpg')}/>
                    </Button>

                </View>

                <View style={{flexDirection:'row'}}>
                    <Button>
                        <Image style={styles.iconStyle} source={require('./Icon/38773-200.png')}/>
                    </Button>
                    <Button>
                        <Image style={styles.iconStyle} source={require('./Icon/Credit_Card-3-512.png')}/>
                    </Button>
                    <TouchableOpacity style={styles.buttonStyle2} onPress={() => navigate('Food_Add',{})}>
                        <Text style={{fontSize:20}}>Ürün Ekle</Text>
                    </TouchableOpacity>

                </View>





            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:'#c8f8e6',
        height:90,
        borderRadius:5,
        margin:8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStyle2: {
        backgroundColor:'#29f8d4',
        height:50,
        width:110,
        borderRadius:5,
        margin:8,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle: {
        marginTop:15,
        marginLeft:70,
        fontSize:25,
        justifyContent:'center',
        alignItems:'center',
        color:'#f8f8f8',
        fontWeight:'600'
    },
    containerStyle:{
        flex:1,
        height:100
    },
    iconStyle: {
        alignSelf: 'stretch',
        margin:5,
        height:55,
        width:55,
        alignItems:'center',
        justifyContent: 'flex-end',
        borderRadius:5,
    },
    ContainerStyle1:{
        flex:1,
        backgroundColor:'#f8f8f8',
    },
    subContainerStyle: {
        flexDirection:'row',
        backgroundColor:'#29f8d4',
    },
    subContainerStyle2: {
        backgroundColor:'#f8f5cd',
        height: 30,
        flexDirection: 'row'
    },
    headerTextStyle: {
        color:'#f8f8f8',
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginLeft:20,
        fontWeight:'600',
        marginTop:15,
        marginLeft:40
    }


});