import React from 'react';
import {Alert,Text,TextInput,TouchableOpacity ,View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import styles from '../constants/styles';
import firebase from 'firebase';
export default class Loginscreen extends React.Component {
    static navigationOptions = {
        header:null
    }
  state={
    phone:'',
    name:'',
  }
  handleChange = key => val => {
this.setState({[key]:val})
  }



  submitform = async () =>{
    if(this.state.phone.length<10)
    {
      Alert.alert('Error','Wrong phone number')
    }
    else if (this.state.name.length<3)
    {
      Alert.alert('Error','Wrong name')
    }
    else
    {
      //save uesr data
       await AsyncStorage.setItem('userPhone',this.state.phone);
       User.phone = this.state.phone;
       firebase.database().ref('user/'+User.phone).set({name : this.state.name});
       this.props.navigation.navigate('App');
    }
  }
  render() {  
    return (
      <View style={styles.container}>
       <TextInput placeholder="Phone number"
       keyboardType="number-pad"
       style={styles.input}
       value={this.state.phone}
       onChangeText={this.handleChange('phone')}
       />
       <TextInput placeholder="Name"
       style={styles.input}
       value={this.state.name}
       onChangeText={this.handleChange('name')}
       />
       <TouchableOpacity onPress={this.submitform}>
         <Text style={styles.btnText}>Enter</Text>
       </TouchableOpacity>
        </View>
    );
  }
}

