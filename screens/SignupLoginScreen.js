
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image} from 'react-native';
//import  db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
    }

    userLogin=(username, password)=>{
        firebase.auth().signInWithEmailAndPassword(username, password).then(()=>{
            return alert("Successfully Login")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage= error.message;
            return Alert.alert(errorMessage);
        })
    }

    userSignUp=(username, password)=>{
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((response)=>{
            return alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage= error.message;
            return alert(errorMessage);
        })
    }
   
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        BARTER SYSTEM
                    </Text>
                </View>
                <View>
                <Image
         style={styles.image}
         source = {{uri: 'data:image/jpeg;base64,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',}}/>
                    <TextInput style={styles.loginBox} 
                    placeholder= "email@example.com"
                    keyboardType= 'email-address'
                    onChangeText= {(text)=>{
                        this.setState({emailId: text})
                    }}/>
                    <TextInput style={styles.loginBox} 
                    placeholder= "Enter Password"
                    secureTextEntry= {true}
                    onChangeText= {(text)=>{
                        this.setState({password: text})
                    }}/>
                    <TouchableOpacity style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container:{
    flex:1, 
    backgroundColor:'#CCFFFF',
    alignItems: 'center'
 }, 
 profileContainer:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
 title :{
    fontSize:39,
    paddingBottom:50,
    color : 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'ArialRoundedMTBold'
 }, 
 loginBox:{
  width: 300, 
  height: 40, 
  borderBottomWidth: 1.5, 
  borderColor : 'black', 
  fontSize: 20, 
  marginLeft:15, 
  marginBottom:10,
  borderRadius: 5
}, 
button:{ 
    width:300, 
    height:50, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:25, 
    backgroundColor:"#FFFFFF", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 15, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16,
    borderWidth: 2,
    marginLeft:15, 
},
 buttonText:{ 
     color:'black', 
     fontWeight:'bold', 
     fontSize:20 
    }, 
buttonContainer:{ 
    flex:1, 
    alignItems:'center' 
} ,
image:{
    width:300,
    height:200,
    margin:20,
    
  },
})