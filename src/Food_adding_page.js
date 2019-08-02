import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import ListViewSelect from 'react-native-list-view-select';
import axios from "axios";
import Button from 'react-native-button';



export default class Food_adding_page extends React.Component {

    componentWillMount() {
        axios.get('http://10.104.97.178:3168/api/masa/findalls').then(response => this.setState({data: response.data}));
        axios.get('http://10.104.97.178.246:3168/api/masa/findallsf').then(response => this.setState({data2: response.data}));
        axios.get('http://10.104.97.178:3168/api/masa/findallg').then(response => this.setState({data3: response.data}));
       /* axios({
            method: 'post',
            url: 'http://10.107.97.106:3168/api/masa/findallg',
            data: {
                id: 9,
                g_id: 0,
                ismi: 'xxxxx',
                aciklama: '6',
                modul: 'stokk',
                webde_gorunsun: 1,
            }
        }).then(res => {
            console.warn(res)
        }).catch(err => {
            console.warn(err)
        })*/

    }

    componentDidMount() {
        this.variable="";
    }
    constructor(props) {
        super(props);
        this.getItem = this.getItem.bind(this);
        this.state = {
            item: "select item",
            isVisible: false,
            data: [],
            data2: [],
            data3:[],
            onPress: false,
            onPress2:false,
            onPress3:false,
            onPress4:false,
            onPress5:false,
            onPress6:false,
            _onPress:false,
        }
    }
    submit() {
        let collection={};
        collection=this.state.data2;
        console.warn(collection);

        var url ='http://10.104.97.178:3168/api/masa/findallads';

        fetch(url,{
            method : 'POST',
            body :JSON.stringify(collection),
            headers : new Headers({
            'Content-Type' : 'application.json'
        })}).then(res => res.json()).catch(err => console.error(err))
            .then(res => console.warn('success',res));

        }


    static navigationOptions = {
        header: null
    };
    onPressTrue ()  {
        this.setState({onPress: true})
    }

    onPressFalse = () => {
        this.setState({onPress: false})
    }

    Item(item) {
        if (item.modul === 'stok')
            return (
                <TouchableOpacity key={item.id} style={styles.buttonStyle} onPress={() => this.getItem(item)} >
                    <Text style={styles.textStyle}>{item.ismi}</Text>
                </TouchableOpacity>
            );
    }

    getItem(item) {

        if (item.id === 1) {
            this.setState({onPress: true})
            this.setState({onPress2: false})
            this.setState({onPress3: false})
            this.setState({onPress4: false})
            this.setState({onPress5: false})
            this.setState({onPress6: false})
        }
        else if(item.id === 2 ) {
            this.setState({onPress2: true})
            this.setState({onPress: false})
            this.setState({onPress3: false})
            this.setState({onPress4: false})
            this.setState({onPress5: false})
            this.setState({onPress6: false})
        }
        else if(item.id=== 3){
            this.setState({onPress3: true})
            this.setState({onPress2: false})
            this.setState({onPress: false})
            this.setState({onPress4: false})
            this.setState({onPress5: false})
            this.setState({onPress6: false})
        }
        else if(item.id === 4) {
            this.setState({onPress4: true})
            this.setState({onPress2: false})
            this.setState({onPress3: false})
            this.setState({onPress: false})
            this.setState({onPress5: false})
            this.setState({onPress6: false})
        }
        else if(item.id === 5) {
            this.setState({onPress5: true})
            this.setState({onPress2: false})
            this.setState({onPress3: false})
            this.setState({onPress4: false})
            this.setState({onPress: false})
            this.setState({onPress6: false})
        }
        else if(item.id === 6) {
            this.setState({onPress6: true})
            this.setState({onPress2: false})
            this.setState({onPress3: false})
            this.setState({onPress4: false})
            this.setState({onPress5: false})
            this.setState({onPress: false})
        }
    }

    renderItem(item) {
        if (item.grubu === 'ET DÖNERLER') {
           if(this.state.onPress)
                return (
                    <TouchableOpacity key={item.id} style={styles.buttonStyle3} >
                        <Text style={styles.textStyle}>{item.stok_adi}</Text>
                    </TouchableOpacity>
                );
        }

        else if (item.grubu === 'TAVUK DÖNERLER'){
           if(this.state.onPress2)
            return (
                <TouchableOpacity key={item.id} style={styles.buttonStyle3} >
                    <Text style={styles.textStyle}>{item.stok_adi}</Text>
                </TouchableOpacity>
            );
        }


        else if (item.grubu === 'KÖFTELER'){
            if(this.state.onPress3)
                return (
                    <TouchableOpacity key={item.id} style={styles.buttonStyle3} >
                        <Text style={styles.textStyle}>{item.stok_adi}</Text>
                    </TouchableOpacity>
                );
        }
        else if(item.grubu === 'İÇECEKLER') {
            if (this.state.onPress4)
                return (
                    <TouchableOpacity key={item.id} style={styles.buttonStyle3}>
                        <Text style={styles.textStyle}>{item.stok_adi}</Text>
                    </TouchableOpacity>
                );
        }
            else if(item.grubu === 'TATLILAR') {
            if (this.state.onPress5)
                return (
                    <TouchableOpacity key={item.id} style={styles.buttonStyle3} onPress={() => this.idFunction(item.id)}>
                        <Text style={styles.textStyle}>{item.stok_adi}</Text>
                    </TouchableOpacity>
                );
        }
        else if(item.grubu === 'EKSTRALAR') {
            if (this.state.onPress6)
                return (
                    <TouchableOpacity key={item.id} style={styles.buttonStyle3}>
                        <Text style={styles.textStyle}>{item.stok_adi}</Text>
                    </TouchableOpacity>
                );
        }
    }


    render() {


        var {navigate} = this.props.navigation;

        return (
            <View style={styles.ContainerStyle1}>
                <View style={styles.subContainerStyle}>
                    <TouchableOpacity onPress={() => navigate('Masa_In', {})}>
                        <Image style={styles.iconStyle} source={require('./Icon/indir.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row',flex:1}}>
                    <View style={{flexDirection: 'column'}}>
                        {
                            this.state.data3.map((item) => this.Item(item))
                        }
                    </View>
                    <View style={{flexDirection: 'column' ,width:240}}>
                    { this.state.data.map ((item) => this.renderItem(item))}
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#0b88f8',
        height: 80,
        flex: 1,
        borderRadius: 5,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle2: {
        backgroundColor: '#29f8d4',
        height: 50,
        width: 110,
        borderRadius: 5,
        margin: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle3: {
        backgroundColor: '#f8baab',
        height: 80,
        flex: 1,
        borderRadius: 5,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        marginLeft: 5,
        color: '#ffffff',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '400'
    },
    containerStyle: {
        flex: 1,
        height: 100
    },
    iconStyle: {
        alignSelf: 'stretch',
        margin: 5,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
    },
    ContainerStyle1: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    subContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#29f8d4',
    },
    subContainerStyle2: {
        backgroundColor: '#f8f5cd',
        height: 30,
        flexDirection: 'row'
    },
    headerTextStyle: {
        color: '#f8f8f8',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontWeight: '600',
        marginTop: 15,
        marginLeft: 40
    }


});