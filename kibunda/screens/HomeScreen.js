import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native'

import banner from '../assets/banner.png'
import free from '../assets/categories/free.jpeg'
import ads from '../assets/categories/ads.jpeg'
import play from '../assets/categories/play.png'
import watch from '../assets/categories/watch.png'
import short from '../assets/categories/short.png'

import refer from '../assets/categories/refer.jpeg'

import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                <MaterialIcons name='menu' size={32} color="white"/>
                <Text style={styles.headerText}>Kibunda</Text>
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
                        <Text style={{fontSize: 14}}>150</Text>
                    </View>
                <MaterialCommunityIcons name='bell' size={32} color="white"/>
                </View>
            </View>

            <ScrollView>

           


            <View style={{margin: 20}}>
                <Image source={banner} style={{
                    width: "100%", 
                    height: 150, 
                    resizeMode: "contain", 
                    borderRadius: 5
                }}/>
            </View>

            <View style={{backgroundColor: "#f4f4f4"}}>
                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={play} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold'}}>PLAY & EARN</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={free} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold'}}>FREE INTERNET FILES</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={short} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold'}}>SHORT LINKS</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={watch} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold'}}>WATCH & EARN</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryWrapper}>
                    <Image source={refer} style={{width: 50, height: 50, resizeMode: "contain", marginRight: 10}}/>
                    <Text style={{color: "#5B3DA1", fontWeight: 'bold'}}>REFER A FRIEND</Text> 
                </TouchableOpacity>

                
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

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
        fontSize: 20,
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