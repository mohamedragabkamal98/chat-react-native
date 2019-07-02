import React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, YellowBox,Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import firebase from 'firebase';
import styles from '../constants/styles'
export default class ProfileScreen extends React.Component {
    static navigationOptions ={
            title: 'Profile',
            }
    render() {
        return (
            <SafeAreaView style={styles.container}>
               <Text style={{fontSize:20,}}>
                   {User.phone}
               </Text>
               <Text>
                   {User.name}
               </Text>
            </SafeAreaView>
        )
    }
}

