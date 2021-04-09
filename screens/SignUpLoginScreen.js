import React,{Component}from 'react';
import {View,Text,StyleSheet,TextInput, Alert} from  'react-native'
import db from '../config'
import firebase from 'firebase';

export default class signuploginscreen extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    userSignUp=(emailId,password)=>{
firebase.auth().createUserWithEmailAndPassword(emailId,password)
.then((renspose)=>{
  return Alert.alert("User Added Successfully")
})
.catch(function(error) {
  var errorCode =error.code;
  var errorMessage = error.message
  return Alert.alert(errorMessage)
});
}

userLogin=(emailId,password)=>{
  firebase.auth().createUserWithEmailAndPassword(emailId,password)
  .then(()=>{
    return Alert.alert("Successfully Login")
  })
  .catch(function(error) {
    var errorCode =error.code;
    var errorMessage = error.message
    return Alert.alert(errorMessage)
  });
  }

    render(){
        return(
          <View style={styles.container}>
          <View>
           <Text style={styles.title}>Barter</Text>
            </View>
            <View>


      <View style={{alignItems:'center'}}>
<TextInput
    styles={styles.loginBox}
    keyboardType= 'email-address'
    onChangeText={(text)=>{
      this.setState({
        email: text
      })
    }}
/>
</View>

          
              <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="enter Password"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />

<TouchableOpacity
style={[styles.button,{marginBottom:20,marginTop:20}]}
onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}
>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

         <TouchableOpacity
           style={[styles.button,{marginBottom:30,marginTop:30}]}

           onPress={()=>this.userSignUp(this.state.emailId,this.state.password)}
           >
           <Text style={styles.buttonText}>SignUp</Text>
         </TouchableOpacity>

            
          </View>
        </View>

        
        )
      }
    }



    const styles = StyleSheet.create({
      loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
      },

      title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00'
      },

      container:{
        flex:1,
        backgroundColor:'#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
      },

      

      
    })
