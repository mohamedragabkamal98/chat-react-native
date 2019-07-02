import React from 'react';
import { Text, View,Image, FlatList, TouchableOpacity, YellowBox,Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import firebase from 'firebase';
import styles from '../constants/styles'
export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation})=>{
        return{
            title: 'Chats',
            headerRight:(
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image
                    source={require('../images/user.png')}
                    style={{width:32,height:32,marginRight:7}}
                    />
                </TouchableOpacity>
            )
        }
            }
    componentDidMount() { console.disableYellowBox = true; }
    state = {
        users: []
    }

    componentWillMount() {
        let dbRef = firebase.database().ref('user');
        dbRef.on('child_added', (val) => {
            let person = val.val();
            person.phone = val.key;
            if(person.phone===User.phone){
                User.name=person.name
            }
            else{
            this.setState((prevState) => {
                return {
                    users: [...prevState.users, person]
                }
            })
        }
        })
    }
    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    renderRow = ({ item }) => {
       // YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat', item)}
                style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 20 }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.phone}
                />
            </View>
        )
    }
}

