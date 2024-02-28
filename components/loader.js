import { View, StyleSheet, Text } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
// https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=9de7fd175d040da534377d6de5efbce6
const Loader = () => {
  return (
    <AnimatedLoader
    visible={true}
    overlayColor='#fdf6aa'
    source={require('../assets/loader.json')}
    animationStyle={style.lottie}
    speed={2}
    ></AnimatedLoader>
  )
}

const style = StyleSheet.create({
    lottie: {
        width: 250,
        height: 250,

    }
})

export default Loader
