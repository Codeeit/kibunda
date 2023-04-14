import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'


import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/auth/SignInScreen'
import SignUpScreen from './screens/auth/SignUpScreen'
import FreeNetScreen from './screens/FreeNetScreen'
import PlayScreen from './screens/PlayScreen'
import ShortLinksScreen from './screens/ShortLinksSreen'
import PushNotifications from './notifications/PushNotifications'

import MoneyMakingIdeasList from './MoneyMakingIdeasList'
import MoneyMakingIdeaDetail from './MoneyMakingIdeaDetail'

const App = () => {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null)

  // Fetch data from JSON file on component mount
  useEffect(() => {
    fetch('moneyMakingIdeas.json')
      .then(response => response.json())
      .then(data => setIdeas(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  // Handle click on an idea item
  const handlePressItem = (idea) => {
    setSelectedIdea(idea);
  }

  return (
    <View style={styles.container}>
      {!selectedIdea ? (
        <MoneyMakingIdeasList ideas={ideas} onPressItem={handlePressItem} />
      ) : (
        <MoneyMakingIdeaDetail idea={selectedIdea} />
      )}
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

