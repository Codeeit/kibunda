import React, { useState } from 'react'
import { 
    View, 
    TextInput,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import { StatusBar } from 'expo-status-bar'

import logo from '../../assets/splash.jpg'

const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignIn = () => {
    // Handle sign-in logic here
  }

  return (
    <View style={styles.container}>
      <StatusBar/>
     <Image source={logo} style={styles.brandLogo}/>

     <Text style={styles.signInText}>Sign Up</Text>
      <Text style={styles.signInDescription}>Please sign up to continue.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>


      <View style={{
        padding: 20, 
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
        }}>
        <Text>Already have an account?  </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={{
                fontSize: 12, 
                fontWeight: 'bold', 
                color: "#5B3DA1"
            }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    margin: 10,
    width: "90%",
    height: 40,
    borderRadius: 5
  },
  brandLogo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  button: {
    width: "90%"
  },
  buttonText: {
    backgroundColor: "#5B3DA1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  },
  signInText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#5B3DA1"
},
signInDescription: {
    fontSize: 14
},
})

export default SignUpScreen
