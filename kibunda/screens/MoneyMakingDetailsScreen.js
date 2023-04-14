
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoneyMakingIdeaDetailScreen = ({ idea }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{idea.title}</Text>
      <Text style={styles.description}>{idea.description}</Text>
      <Text style={styles.tips}>{idea.tips}</Text>
      <Text style={styles.resources}>{idea.resources}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    },
    description: {
    fontSize: 18,
    marginBottom: 8,
    },
    tips: {
    fontSize: 16,
    marginBottom: 8,
    },
    resources: {
    fontSize: 16,
    },
    });
    
    export default MoneyMakingIdeaDetailScreen;
