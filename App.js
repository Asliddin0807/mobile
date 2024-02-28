import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Loader from './components/loader';
import Weather from './components/weather';
import * as Location from 'expo-location';
import axios from 'axios';
// import axios from 'axios';

const API_KEY = '9de7fd175d040da534377d6de5efbce6'

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)

  const getWeather = async(lat, lot) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${API_KEY}&units=metric`)
    // const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=afrika&appid=${API_KEY}&units=metric`)
      
      setLocation(data)
      setLoading(false)
  }

  const searchQuery = async(query) => {
    setLoading(true)
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    setLocation(data)
    setLoading(false)
  }

  const getLocation = async() => {
    try{
      const { status } = await Location.requestForegroundPermissionsAsync()
      if(status != 'granted'){
        Alert.alert('Pleace alow permission!')
      }
      console.log(status)
      const {coords: { latitude, longitude }} = await Location.getCurrentPositionAsync({})
      getWeather(latitude, longitude)
    }catch(err){
      Alert.alert('Location is not defined!')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return  isLoading ? <Loader /> : <Weather 
  searchQuery={searchQuery}
  temp={Math.round(location.main.temp)} 
  name={location.name}
  condition={location.weather[0].main}/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
