import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Button,
    ScrollView
} from 'react-native'

import banner from '../assets/banner.png'
import tigo from '../assets/tigologo.png'
import airtel from '../assets/airtel.png'
import halotel from '../assets/halotel.png'

import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const FreeNetScreen = () => {
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
                <TouchableOpacity style={{
                    padding: 20, 
                    backgroundColor: "white", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    margin: 10,
                    borderRadius: 5
                }}>
                    <Image source={tigo} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                    <Text>Tigo Tanzania</Text>
                    <TouchableOpacity style={{backgroundColor: "#5B3DA1", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5}}>
                    <Text style={{color: "white", fontWeight: 'bold'}}>GET FILES</Text>
                    </TouchableOpacity>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{
                    padding: 20, 
                    backgroundColor: "white", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    margin: 10,
                    borderRadius: 5
                }}>
                    <Image source={airtel} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                    <Text>Airtel Tanzania</Text>
                    <TouchableOpacity style={{backgroundColor: "#5B3DA1", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5}}>
                    <Text style={{color: "white", fontWeight: 'bold'}}>GET FILES</Text>
                    </TouchableOpacity>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{
                    padding: 20, 
                    backgroundColor: "white", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    margin: 10,
                    borderRadius: 5
                }}>
                    <Image source={halotel} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                    <Text>Halotel Tanzania</Text>
                    <TouchableOpacity style={{backgroundColor: "#5B3DA1", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5}}>
                    <Text style={{color: "white", fontWeight: 'bold'}}>GET FILES</Text>
                    </TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FreeNetScreen

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
})