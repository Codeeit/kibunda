import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'


import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/auth/SignInScreen'
import SignUpScreen from './screens/auth/SignUpScreen'
import FreeNetScreen from './screens/FreeNetScreen'
import Push from './notifications/Push'


export default function App() {
  return (
    <View style={styles.container}>
      <Push/>
      <StatusBar style="light" backgroundColor='#5B3DA1'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
