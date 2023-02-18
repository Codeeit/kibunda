import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native'

import slots from '../assets/slots.png'
import dice from '../assets/dice.png'
import poker from '../assets/poker.jpeg'
import roulette from '../assets/roulette.jpeg'
import black from '../assets/black.png'

import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PlayScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                <MaterialIcons name='menu' size={32} color="white"/>
                <Text style={styles.headerText}>Play & Earn</Text>
                </View>

                <View style={styles.headerRight}>
                    <View style={{
                        flexDirection: "row", 
                        justifyContent: "center", 
                        alignItems: "center",
                        backgroundColor: "white",
                        paddingHorizontal: 10,
                        paddingVertical: 3,
                        borderRadius: 100
                        }}>
                        <MaterialCommunityIcons name="bitcoin" size={20} color="#5B3DA1"/>
                        <Text style={{fontSize: 14}}>0.0150</Text>
                    </View>
                <MaterialCommunityIcons name='bell' size={32} color="white"/>
                </View>
            </View>

            <ScrollView>

            <View style={{backgroundColor: "#f4f4f4"}}>
                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={roulette} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold',fontSize: 15,}}>Roulete</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={dice} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold',fontSize: 15,}}>Dice</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={black} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold',fontSize: 15,}}>Blackjack</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={poker} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold',fontSize: 15,}}>Poker</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={slots} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold', fontSize: 15,}}>Slots</Text> 
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PlayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#5B3DA1",
        width: "100%"
    },
    header: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    headerLeft: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
    },
    headerRight: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
    },
    headerText: {
        fontSize: 17,
        color: "white",
        paddingHorizontal: 10
    },
    categoryWrapper: {
        padding: 20, 
        backgroundColor: "white", 
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center",
        margin: 10,
        borderRadius: 5
}
})