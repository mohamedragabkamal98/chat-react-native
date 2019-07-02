import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBnanyARsvE1qg9LnkwmeEPaLcrx2rNKso",
            authDomain: "friebasechat-12003.firebaseapp.com",
            databaseURL: "https://friebasechat-12003.firebaseio.com",
            projectId: "friebasechat-12003",
            storageBucket: "",
            messagingSenderId: "497392043647",
            appId: "1:497392043647:web:900854d00cf4adca"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}