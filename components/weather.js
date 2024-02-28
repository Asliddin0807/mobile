import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar" 
import { useState } from "react"

const weatherOption = {
    Mist: {
        colorName: ['#77aee1', '#88b8e5'],
        iconName: 'weather-fog',
        title: 'Mist',
        description: 'На улице очент холодно!'
    },
    Clear: {
        colorName: ['#d5b030', '#88b8e5'],
        iconName: 'weather-sunny',
        title: 'Yaxshi',
        description: "Ko'cha yaxshi"
    },
    Thunderstorm: {
        colorName: ['#413b3e', '#807c7e'],
        iconName: 'weather-lighting',
        title: 'Uyda qoling!',
        description: "Ko'cha qo'rqinchli!"
    },
    Drizzle: {
        colorName: ['#837671', '#817b79'],
        iconName: 'weather-rain',
        title: 'Yomgirli',
        description: "Ko'chada yomg'ir yog'moqda!"
    },

    Rain: {
        colorName: ['#837671', '#817b79'],
        iconName: 'weather-pouring',
        title: 'Yomgirli',
        description: "Ko'chada yomg'ir yog'moqda!"
    },

    Snow: {
        colorName: ['#c9bdb3', '#ffffff'],
        iconName: 'snowflake',
        title: "Qorli ko'cha!" ,
        description: "Ko'chada qor yog'moqda!"
    },

    Dust: {
        colorName: ['#c9bdb3', '#ffffff'],
        iconName: 'weather-windy-variant',
        title: "Dustiy" ,
        description: "O'wa xullas"
    },

    Smoke: {
        colorName: ['#c9bdb3', '#ffffff'],
        iconName: 'weather-windy',
        title: "Qorli ko'cha!" ,
        description: "Ko'chada qor yog'moqda!"
    },

    Haze: {
        colorName: ['#c9bdb3', '#ffffff'],
        iconName: 'weather-hazy',
        title: "Qorli ko'cha!" ,
        description: "Ko'chada qor yog'moqda!"
    },

    Clouds: {
        colorName: ['#c9bdb3', '#ffffff'],
        iconName: 'weather-cloudy',
        title: "Bulutli" ,
        description: "Ko'chada bulut!"
    }

} 


const Weather = (props) => {
    const { temp, name, condition, searchQuery } = props
    console.log(name, temp, condition)
    const [query, setQuery] = useState('')

  return (
    <LinearGradient style={style.container} colors={weatherOption[condition].colorName}>
        <StatusBar barStyle={'light-content'}/>
        <View style={style.iconOption}>
            <MaterialCommunityIcons 
            name={weatherOption[condition].iconName} size={90} color={'#f1e6ef'}></MaterialCommunityIcons>
            <View style={style.flex}>
                <Text style={style.temp}>{temp}℃</Text>
                <Text style={style.temp}> | {name}</Text>
            </View>
        </View>
        <View style={{ ...style.container, ...style.textContainer}}>
            <Text style={style.title}>{weatherOption[condition].title}</Text>
            <Text style={style.desc}>{weatherOption[condition].description}</Text>
            <View style={style.searchInput}>
                <TextInput placeholder="Tashkent" style={style.input} value={query} onChangeText={(text) => setQuery(text)}/>
                <Button title="Search" color={'#9f72ff'} onPress={() => searchQuery(query)}></Button>
            </View>
        </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    iconOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    temp: {
        fontSize: 42,
        fontFamily: 'monospace',
        color: '#ffff'
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingHorizontal: 40,
    },

    title: {
        color: 'white',
        fontWeight: '3000',
        fontSize: 49,
        marginBottom: 10,
    },

    desc: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white'
    },

    searchInput: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input: {
        width: "70%",
    }
})

export default Weather
